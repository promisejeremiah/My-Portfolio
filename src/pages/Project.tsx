import React from 'react';
import './Project.css'
import img from '../images/webscrap.jpeg';
import imgb from '../images/register.png';
import imgc from '../images/iris.png';


const Project = () => {
    return (
        <div className="container">
            <div className="project">
                <h1 className=" text-dark mb-5 pt-3 text-center font-weight-bolder">Projects</h1>
                <div className="card-deck">
                    <a href="https://github.com/promisejeremiah/Deploy-Iris_Flower_Classification" className="card h-50">
                        <img className="card-img-top" src={imgc} alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title text-center">Iris Dataset</h5>
                            <p className="card-text">
                            I trained a model to predict the type of iris flower depending on the flower size. 
                            </p>
                            <a className="btn btn-primary text-white" href="https://github.com/promisejeremiah/Deploy-Iris_Flower_Classification">Read More</a>
                        </div>
                        
                    </a>
                    <a href="https://github.com/promisejeremiah/WebScraper" className="card">
                        <img className="card-img-top" src={img} alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title text-center">Web Scraper</h5>
                            <p className="card-text">
                                A web scraper built using golang. It scrapes data from a any website.
                            </p>
                            <a className="btn btn-primary text-white" href="https://github.com/promisejeremiah/WebScraper">Read More</a>
                        </div>
                        
                    </a>
                    <a href="https://github.com/promisejeremiah/Register-Login-API" className="card">
                        <img className="card-img-top" src={imgb} alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title text-center">SignUp/Login Form</h5>
                            <p className="card-text">
                                A signup/login form. Frontend is built with Reactjs and backen is built with Go.
                            </p>
                            <a className="btn btn-primary text-white" href="https://github.com/promisejeremiah/Register-Login-API">Read More</a>
                        </div>
                        
                    </a>
                </div>

                <div className="card-deck pt-5 mt-5">
                    <a href="https://github.com/promisejeremiah/Deploy-Iris_Flower_Classification" className="card h-50">
                        <img className="card-img-top" src={imgc} alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title text-center">Iris Dataset</h5>
                            <p className="card-text">
                            I trained a model to predict the type of iris flower depending on the flower size. 
                            </p>
                            <a className="btn btn-primary text-white" href="https://github.com/promisejeremiah/Deploy-Iris_Flower_Classification">Read More</a>
                        </div>
                        
                    </a>
                    <a href="https://github.com/promisejeremiah/WebScraper" className="card">
                        <img className="card-img-top" src={img} alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title text-center">Web Scraper</h5>
                            <p className="card-text">
                                A web scraper built using golang. It scrapes data from a any website.
                            </p>
                            <a className="btn btn-primary text-white" href="https://github.com/promisejeremiah/WebScraper">Read More</a>
                        </div>
                        
                    </a>
                    <a href="https://github.com/promisejeremiah/Register-Login-API" className="card">
                        <img className="card-img-top" src={imgb} alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title text-center">SignUp/Login Form</h5>
                            <p className="card-text">
                                A signup/login form. Frontend is built with Reactjs and backen is built with Go.
                            </p>
                            <a className="btn btn-primary text-white" href="https://github.com/promisejeremiah/Register-Login-API">Read More</a>
                        </div>
                        
                    </a>
                </div>

                <div className="card-deck pt-5 mt-5">
                    <a href="https://github.com/promisejeremiah/Deploy-Iris_Flower_Classification" className="card h-50">
                        <img className="card-img-top" src={imgc} alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title text-center">Iris Dataset</h5>
                            <p className="card-text">
                            I trained a model to predict the type of iris flower depending on the flower size. 
                            </p>
                            <a className="btn btn-primary text-white" href="https://github.com/promisejeremiah/Deploy-Iris_Flower_Classification">Read More</a>
                        </div>
                        
                    </a>
                    <a href="https://github.com/promisejeremiah/WebScraper" className="card">
                        <img className="card-img-top" src={img} alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title text-center">Web Scraper</h5>
                            <p className="card-text">
                                A web scraper built using golang. It scrapes data from a any website.
                            </p>
                            <a className="btn btn-primary text-white" href="https://github.com/promisejeremiah/WebScraper">Read More</a>
                        </div>
                        
                    </a>
                    
                    <a href="https://github.com/promisejeremiah/Register-Login-API" className="card">
                        <img className="card-img-top" src={imgb} alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title text-center">SignUp/Login Form</h5>
                            <p className="card-text">
                                A signup/login form. Frontend is built with Reactjs and backen is built with Go.
                            </p>
                            <a className="btn btn-primary text-white" href="https://github.com/promisejeremiah/Register-Login-API">Read More</a>
                        </div>
                        
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Project;
