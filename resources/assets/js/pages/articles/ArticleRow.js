import React from 'react';
import Actions from './Actions'

const ArticleRow = (props) => {
    return (
        <tr>
            <td>{props.index}</td>
            <td>{props.article.slug.substr(0, 25)}</td>
            <td>{props.article.title.substr(0, 25)}</td>
            <td>{props.article.content.substr(0, 25)}</td>
            <Actions article={props.article} doRemove={props.doRemove} />
        </tr>

    )
};

export default ArticleRow;
