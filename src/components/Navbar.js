import React, { Component } from 'react'
import { BrowserRouter as Link } from 'react-router-dom'

export default class Navbar extends Component {
   


    render() {
        return (
            <div>
                <Link to="/">Home</Link>
             <br />
                 <Link to="/posts">Posts</Link>
            </div>
        )
    }
}
