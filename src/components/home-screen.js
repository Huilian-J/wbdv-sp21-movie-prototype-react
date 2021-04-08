import React from "react";
import {Link} from "react-router-dom";

const HomeScreen = () => {
    return (
        <div>
            <h2 style={{textAlign:'center'}}>Home Screen</h2>
            <br/>
            <Link to="/search/">
                <h2 style={{textAlign:'center'}}>Search</h2>
            </Link>
            <Link to="/details">
                <h2 style={{textAlign:'center'}}>Details</h2>
            </Link>
            <Link to="/login">
                <h2 style={{textAlign:'center'}}>Login</h2>
            </Link>
            <Link to="/register">
                <h2 style={{textAlign:'center'}}>Register</h2>
            </Link>
        </div>
    )
}

export default HomeScreen;