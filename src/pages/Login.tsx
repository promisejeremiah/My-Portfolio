import React, { SyntheticEvent, useState } from 'react';
import { Redirect } from 'react-router-dom';
import './Login.css';



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const response = await fetch('https://promise-register-login-api.herokuapp.com/login', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });

        const content = await response.json();
        console.log(content)

        setRedirect(true);
        
    }
    if (redirect) {
      return <Redirect to="/" />;
    }


    return (
        <div className="container login">
            <div className="login-form">
                <form onSubmit={submit}>
                <h1 className=" text-white p-4 text-center font-weight-bolder">Login</h1>

                <div>
                    <input type="email" className="form-control"  placeholder="Enter email" required
                        onChange={e => setEmail(e.target.value)} />
                </div>

                <div>
                    <input type="password" className="form-control"  placeholder="Enter Password" required
                        onChange={e => setPassword(e.target.value)} />
                </div>

                <div className="row justify-content-center pb-5 pt-4">
                    <button className="btn btn-lg btn-primary justify-content-center" type="submit">Login</button>
                </div>
                </form>
            </div>
        </div>
    );
};

export default Login;