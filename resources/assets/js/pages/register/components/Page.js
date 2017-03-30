//import libs
import React, {Component} from 'react';
import _ from 'lodash'
import classnames from 'classnames'

//import components
import Form from './_Form'

class Page extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
            },
            errors: {},
            hasError: false
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange({ name, value }) {
        const { user } = this.state

        user[name] = value

        this.setState({ user })
    }

    onSubmit(e) {
        e.preventDefault()

        this.setState({
            errors: {},
            hasError: false,
        })

        const { user } = this.state

        axios.post('/api/auth/register', user)
            .then(res => {
                if (res.response.status === 201) {

                }
            })
            .catch(err => {
                if (err.response.status === 422) {
                    const errors = err.response.data
                    this.setState({ errors, hasError: true })
                }
            })
    }

    renderErrors() {
        const { errors, hasError } = this.state

        if (!hasError) return null
        return (
            <div className="alert alert-danger alert-dismissible" role="alert">
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                {_.map(_.forOwn(this.state.errors), (error, field) => (
                    <p key={`error-${field}`} ><strong>{field}</strong> {_.head(error)}</p>
                ))}
            </div>
        )
    }

    render() {
        return <div className="row">
            <div className="col-md-8 col-md-offset-2">
                <div className="panel panel-default">
                    <div className="panel-heading">Register > not functional</div>
                    <div className="panel-body">
                        {this.renderErrors()}
                        <Form {...this.state} onChange={this.onChange} onSubmit={this.onSubmit} />
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Page
