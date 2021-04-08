import React, {useState} from "react";
import {Link} from "react-router-dom";


const Login = () => {
    const [user, setUser] = useState(true);
    return (
        <div className="container-fluid login-body login-box">
            {
                user &&
                <h3>Log in</h3>
            }
            {
                !user &&
                <h3>Admin - Log in</h3>
            }

            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
            <p className="forgot-password text-right">
                <a href="#">Forgot password?</a>
            </p>
            {
                user &&
                <p className="forgot-password text-right">
                    <a
                        onClick={() => {
                            setUser(false)
                        }}
                        href="#">
                        Login as Admin
                    </a>
                </p>
            }
            {
                !user &&
                <p className="forgot-password text-right">
                    <a
                        onClick={() => {
                            setUser(true)
                        }}
                        href="#">
                        Login as User
                    </a>
                </p>
            }

        </div>
    )
}

export default Login;