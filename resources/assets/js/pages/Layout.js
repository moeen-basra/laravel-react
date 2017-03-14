//import libs
import React, { Component } from 'react'
// import { Link } from "react-router"

//import components
import Navigation from "../includes/Navigation"

class Layout extends Component {
    render(){
        const { location } = this.props;
        const containerStyle = {
            marginTop: "60px"
        };
        return(
            <div>
                <Navigation location={location} />
                <div class="container" style={containerStyle}>
                    <div class="row">
                        <div class="col-lg-12">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Layout
