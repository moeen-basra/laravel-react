import React, {Component} from 'react';

class Actions extends Component {

    constructor(props) {
        super(props);

    }

    static edit(id) {
        window.location.href = `/articles/${id}/edit`;
    }

    render() {
        const {article, doRemove} = this.props;

        return (
            <div className="btn-group">
                <a href="#{{article.id}}" onClick={e => Actions.edit(article.id) } className="btn btn-primary btn-sm">
                    Edit
                </a>
                <a href="#{{article.id}}" onClick={e => doRemove(e, article.id) } className="btn btn-danger btn-sm">
                    Trash
                </a>
            </div>
        );
    }

}

export default Actions;