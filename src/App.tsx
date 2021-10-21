import React from 'react';
import Particles from "react-tsparticles";
import './App.css';
import particlesOptions from "./particles.json";
import { ISourceOptions } from "tsparticles";
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Project from './pages/Project';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import MyCV from './pages/MyCV';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
    return (
        <div className="App">
            <Particles options={particlesOptions as ISourceOptions}/>
            <BrowserRouter>
                <Nav />
                    <Route exact path="/" component={Home}/>
                    <Route path="/mycv" component={MyCV}/>
                    <Route path="/project" component={Project}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
