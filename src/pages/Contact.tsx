import React, { SyntheticEvent, useState } from 'react';
import { Redirect } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [redirect, setRedirect] = useState(false);

    const send = async (e: SyntheticEvent) => {
        e.preventDefault();

        await fetch('https://promise-register-login-api.herokuapp.com/send', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                fullname,
                email,
                message
            })
        });

        

        setRedirect(true);
        
    }
    if (redirect) {
      return <Redirect to="/" />;
    }

    return (
        <div className="container contact">
            <div className="contact-form"> 
                <form onSubmit={send}>
                <h1 className="mb-4 text-white pt-4 text-center font-weight-bold">Contact</h1>
                <div className="f-name">
                    <input type="text" className="form-control" id="fullname" placeholder="Enter Fullname" required
                        onChange={e => setFullname(e.target.value)} />
                </div>

                <div>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" required
                        onChange={e => setEmail(e.target.value)} />
                </div>

                <div>
                    <textarea className="form-control" id="comment" placeholder="Enter Message" required
                        onChange={e => setMessage(e.target.value)} />
                </div>
            
                <div className="row justify-content-center pt-1 pb-3 ">
                    <button className="btn btn-lg btn-primary justify-content-center" type="submit">Send</button>
                </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;