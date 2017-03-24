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
                <a href="#" onClick={e => Actions.edit(article.id) } className="btn btn-primary btn-sm">
                    <i className="glyphicon glyphicon-pencil" /> Edit
                </a>
                <a href="#" onClick={e => doRemove(e, article.id) } className="btn btn-danger btn-sm">
                    <i className="glyphicon glyphicon-trash" /> Trash
                </a>
            </div>
        );
    }

}

export default Actions;