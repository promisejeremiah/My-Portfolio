import React from 'react';
import './MyCV.css'

const MyCV = () => {
    return (
        <div className="container">
            <div className="MYCV">
                <div className="mycv mb-5 pt-3 text-center">
                    <h1 className="mt-4 pt-4 font-weight-bolder">JEREMIAH PROMISE ANIEDI</h1>
                    <a href="https://github.com/promisejeremiah">https://github/promisejeremiah</a>
                </div>
                <div>
                    <h4>CARRER SUMMARY</h4>
                    <hr />
                    <p>Self taugh programmer with expirience from projects i create. Seeking an entry level where i can leverage my programming skils, technical skils, passion to expand my base of knowledge with a collaborative team.</p>
                </div>
                <div className="pt-5">
                    <h4>EDUCATION</h4>
                    <hr />
                    <p className="mb-1">School Of Nursing, Uyo</p>
                    <p><b>Registered Nurse</b> (RN)</p>
                </div>
                <div className="pt-5">
                    <h4>TECHNICAL SKILLS</h4>
                    <hr />
                    <ul>
                        <li><b>Programming Languages:</b> Python, Go, SQL</li>
                        <li><b>Operating System:</b> Windows DOS, MacOS, Linux</li>
                        <li><b>Version Control:</b> Git</li>
                    </ul>
                </div>
                <div className="pt-5">
                    <h4>RELATED EXPERIENCE</h4>
                    <hr />
                    <p className="mb-1"><b>BeatingVibes</b></p>
                    <ul>
                        <li>
                        A music and entertainment blog built on wordpress where i daily updated news contents, music and video contents were hosted on amazon aws S3 bucket.  
                        </li>  
                    </ul>
                </div>
                <div className="mb-5 pb-5 pt-5">
                    <h4>PERSONAL PROJECTS</h4>
                    <hr />
                    <p className="mb-1"><b>Machine Learning</b></p>
                    <a href="https://github.com/promisejeremiah/Deploy-Iris_Flower_Classification">Iris Dataset</a>
                    <ul>
                        <li>
                            I trained a model to predict the type of iris flower depending on the flower size. I was able to achieve this by getting the dataset, cleaned it, trained the model using Linear Regression Algorithm, i then built an api around the model using Python(Flask) which then has a frontend where users can input their values.  
                        </li>  
                    </ul>
                </div>
        
            </div>
        </div>
    );
};

export default MyCV;