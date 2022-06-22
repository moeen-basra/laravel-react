 // import libs
 import React, { Component } from 'react'
 import PropTypes from 'prop-types'
 import $ from 'jquery'
 import { Redirect } from 'react-router-dom'
 import { requestPasswordLink } from '../../service'
 import { Validator } from 'ree-validate'
 
 // import components
 import Form from './components/Form'
 
 // initialize component
 class Page extends Component {
   // set name of the component
   static displayName = 'ForgetPassword'
 
   // validate props
   static propTypes = {
     isAuthenticated: PropTypes.bool.isRequired,
     dispatch: PropTypes.func.isRequired
   }
 
   constructor(props) {
     super(props)
 
     this.validator = new Validator({
       email: 'required|email',
     })
 
     // set the state of the app
     this.state = {
       credentials: {
         email: '',
       },
       message: '',
       errors: this.validator.errors
     }
   }
 
   // after mounting the component add a style to the body
   componentDidMount() {
     $('body').attr('style', 'background-color: #eee')
   }
 
   // remove body style before component leaves dom
   componentWillUnmount() {
     $('body').removeAttr('style')
   }
 
   // event to handle input change
   handleChange = (name, value) => {
     const { errors } = this.validator
 
     this.setState({ credentials: { ...this.state.credentials, [name]: value } })
 
     errors.remove(name)
 
     this.validator.validate(name, value)
       .then(() => {
         this.setState({ errors })
       })
   }
 
   // event to handle form submit
   handleSubmit = e => {
     e.preventDefault()
     const { credentials } = this.state
     const { errors } = this.validator
 
     this.validator.validateAll(credentials)
       .then((success) => {
         if (success) {
           this.submit(credentials)
         } else {
           this.setState({ errors })
         }
       })
   }
   
 
  submit(data) {
    this.setState({message: ''});
    requestPasswordLink(data).then(res => {
      console.log(res.data.message);
      this.setState({message: res.data.message})
    }).catch(err => {
      console.log('Reset Error', err);
    })
  }
 
   // render component
   render() {
 
     // check if user is authenticated then redirect him to home page
     if (this.props.isAuthenticated) {
       return <Redirect to="/" />
     }
     const props = {
       email: this.state.credentials.email,
       errors: this.state.errors,
       handleChange: this.handleChange,
       handleSubmit: this.handleSubmit,
     }
 
     return (<div className="container py-5">
       <div className="row">
         <div className="col-md-12">
           <div className="row">
             <div className="mx-auto">
               <span className="anchor"/>
               <div className="card has-shadow">
                 <div className="card-body">
                  { this.state.message ? 
                    (<div className="alert alert-success">{this.state.message}</div>) 
                    : null
                  }

                   <Form {...props} />
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>)
   }
 }
 
 export default Page
 