//import libs
import React, {Component} from 'react';
import axios from 'axios';
import ArticleRow from './ArticleRow';
import Paginator from '../common/Paginator';

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

    doRemove(e, id) {
        e.preventDefault();

        console.log(`Trying to remove ==> ${id}`);
    }

    pageChange(url){
        console.log('changing page :: ', url);
    }

    renderArticles() {
        let {articles, counter} = this.state;

        return (
            <div>
                <table className="table table-striped">
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
                            <ArticleRow key={`article-${index}`} article={article} index={index}
                                        doRemove={this.doRemove}/>
                        )
                    })}
                    </tbody>
                </table>
                <Paginator prev_page_url={articles.prev_page_url} next_page_url={articles.next_page_url} pageChange={this.pageChange}/>
            </div>)
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
