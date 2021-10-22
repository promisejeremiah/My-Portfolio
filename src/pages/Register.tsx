import React, { SyntheticEvent, useState } from 'react';
import { Redirect } from 'react-router-dom';
import './Register.css';


const Register = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await fetch('https://promise-register-login-api.herokuapp.com/signup', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                firstname,
                lastname,
                email,
                password
            })
        });
        setRedirect(true);

    }

    if (redirect) {
        return <Redirect to="/login" />;
    }


    
    return (
        <div className="container register">
            <div className="reg-form">
                <form onSubmit={submit}>
                <h1 className="mb-4 text-white p-4 text-center font-weight-bolder">Register</h1>
                <div className="fname">
                    <input type="text" className="form-control"  placeholder="Enter Firstname" required
                        onChange={e => setFirstname(e.target.value)} />
                </div>
                <div>
                    <input type="text" className="form-control"  placeholder="Enter Lastname" required
                        onChange={e => setLastname(e.target.value)} />
                </div>
                <div>
                    <input type="email" className="form-control"  placeholder="Enter email" required
                        onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                    <input type="password" className="form-control"  placeholder="Enter Password" required
                        onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="row justify-content-center pb-5 pt-4">
                    <button className="btn btn-lg btn-primary justify-content-center" type="submit">Register</button>
                </div>
                <div>
                    <p className="text-white pb-4">Have an account? <span>
                        <Link className="text-white" to={'/login'}>Login</Link></span></p>
                </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
