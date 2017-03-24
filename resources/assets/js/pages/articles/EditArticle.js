import React, {Component} from 'react';


class EditArticle extends Component{

    constructor(props){
        super(props);

        this.state = {
            article:{
                slug: '',
                title: '',
                content: ''
            },
            articleId: props.routeParams.id
        }
    }

    render(){
        return (
            <div className="row">
                <div className="col-lg-12">
                    <div className="form-group">
                        <label htmlFor="">Title</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Slug</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Content</label>
                        <textarea className="form-control"></textarea>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditArticle;