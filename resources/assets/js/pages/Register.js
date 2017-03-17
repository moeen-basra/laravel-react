//import libs
import React, {Component} from 'react';

class Register extends Component {
    render() {
        return <div className="row">
            <div className="col-md-8 col-md-offset-2">
                <div className="panel panel-default">
                    <div className="panel-heading">Register</div>
                    <div className="panel-body">
                        <form className="form-horizontal" role="form">
                                <div className="form-group">
                                    <label htmlFor="name" className="col-md-4 control-label">Name</label>

                                    <div className="col-md-6">
                                        <input id="name"
                                               type="text"
                                               className="form-control"
                                               name="name"
                                               required={true}
                                               autoFocus/>

                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email" className="col-md-4 control-label">E-Mail Address</label>

                                    <div className="col-md-6">
                                        <input id="email"
                                               type="email"
                                               className="form-control"
                                               name="email"
                                               value=""
                                               required={true}/>

                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password" className="col-md-4 control-label">Password</label>

                                    <div className="col-md-6">
                                        <input id="password" type="password" className="form-control"
                                               name="password" required=""/>

                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password-confirm" className="col-md-4 control-label">Confirm
                                        Password</label>

                                    <div className="col-md-6">
                                        <input id="password-confirm" type="password" className="form-control"
                                               name="password_confirmation" required=""/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="col-md-6 col-md-offset-4">
                                        <button type="submit" className="btn btn-primary">
                                            Register
                                        </button>
                                    </div>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Register
