//import libs
import React, {Component} from 'react';
import axios from 'axios';
import Actions from './Actions';

class Articles extends Component {

    constructor(props) {
        super(props);

        this.state = {
            articles: {
                data: []
            },
            counter: 1
        }
    }

    componentDidMount() {
        axios.get('/api/articles')
            .then(response => {
                this.setArticles(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    setArticles(articles) {
        this.setState({articles})
    }

    doRemove(e, id){
        e.preventDefault();

        console.log(`Trying to remove ==> ${id}`);
    }

    renderArticles() {
        let {articles, counter} = this.state;

        return <table className="table table-striped">
            <thead>
            <tr>
                <th>S No</th>
                <th>Title</th>
                <th>Slug</th>
                <th>Content</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {articles.data.map((article, index) => {
                return (
                    <tr key={`article-${index}`}>
                        <td>{counter++}</td>
                        <td>{article.title.substr(0, 30)}</td>
                        <td>{article.slug.substr(0, 30)}</td>
                        <td>{article.content.substr(0, 25)}</td>
                        <Actions article={article} doRemove={this.doRemove} />
                    </tr>
                )
            })}
            </tbody>
        </table>
    }

    render() {

        return (
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <h1>Articles</h1>
                    </div>
                </div>
                {this.renderArticles()}
            </div>
        );
    }
}

export default Articles
