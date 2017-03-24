import React from 'react'

const Paginator = (props) => {
    return (
        <div className="row">
            <div className="col-lg-6 text-left">
                {
                    props.prev_page_url !== null ?
                        (
                            <a href='#' onClick={e => props.pageChange(props.prev_page_url)}
                               className="btn btn-default btn-sm">Previous Page</a>
                        ) :
                        (
                            <a href="#" className="btn btn-default btn-sm disabled">Previous Page</a>
                        )
                }
            </div>
            <div className="col-lg-6 text-right">
                {
                    props.next_page_url !== null ?
                        (
                            <a href="#" onClick={e => props.pageChange(props.next_page_url)}
                               className="btn btn-default btn-sm">Next Page</a>
                        ) :
                        (
                            <a href="#" className="btn btn-default btn-sm disabled">Next Page</a>
                        )
                }
            </div>
        </div>
    );
};

export default Paginator;