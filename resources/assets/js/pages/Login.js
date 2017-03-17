//import libs
import React, { Component } from 'react';

class Login extends Component {
    render() {
        return <div className="row">
            <div className="col-md-8 col-md-offset-2">
                <div className="panel panel-default">
                    <div className="panel-heading">Login</div>
                    <div className="panel-body">
                        <form className="form-horizontal" role="form">
                            <div className="form-group">
                                <label htmlFor="email" className="col-md-4 control-label">E-Mail Address</label>

                                <div className="col-md-6">
                                    <input id="email"
                                           type="email"
                                           className="form-control"
                                           name="email"
                                           value=""
                                           required autoFocus/>

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
                                <div className="col-md-6 col-md-offset-4">
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox" name="remember"/> Remember Me
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-md-8 col-md-offset-4">
                                    <button type="submit" className="btn btn-primary">
                                        Login
                                    </button>

                                    <a className="btn btn-link" href="http://127.0.0.1:8000/password/reset">
                                        Forgot Your Password?
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Login
