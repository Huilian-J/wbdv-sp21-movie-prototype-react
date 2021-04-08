import React, {Component, useState} from "react";

const Register = () => {
    const [user, setUser] = useState(true);
    return (
        <form>
            <h3>Register</h3>

            <div className="form-group">
                <label>First name</label>
                <input type="text" className="form-control" placeholder="First name" />
            </div>

            <div className="form-group">
                <label>Last name</label>
                <input type="text" className="form-control" placeholder="Last name" />
            </div>

            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="form-group">
                <label>User Type</label>
                <select
                    id="userFld"
                    onChange={(event) => {
                        if(event.target.value === "user")
                            setUser(true)
                        else
                            setUser(false)
                    }}
                    className="form-control">
                    <option
                        value="user">
                        User
                    </option>
                    <option
                        value="admin">Admin</option>
                </select>
                {
                    !user &&
                    <input type="password" className="form-control mt-2" placeholder="Enter admin code" />
                }
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
            <p className="forgot-password text-right">
                Already registered <a href="#">log in?</a>
            </p>
        </form>
    );
}

export default Register