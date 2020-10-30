import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './About.css';

const About = () => {
    return (

        <div>
            <Navbar></Navbar>
            <div className="container">
                <section className="about-section first-section">
                    <div className="row ">
                        <div className="col-md-4">
                            <h2>About Me </h2>
                        </div>
                        <div className="col-md-6">
                            <p>Front-End Web Developer using React.js with a decent knowledge of the backend technology like Node.js, Express.js, MongoDB, REST-API, JSON, Firebase, Debugging and more.</p>
                        </div>
                    </div>
                </section>
                <hr />
                <section className="about-section">
                    <div className="row ">
                        <div className="col-md-4">
                            <h2>Skills</h2>
                        </div>
                        <div className="d-flex">
                            <div className="col">
                                <ul>
                                    <li className="mt-2">React</li>
                                    <li className="mt-2">Node.js</li>
                                    <li className="mt-2">Express.js</li>
                                    <li className="mt-2">MongoDB</li>
                                    <li className="mt-2">JavaScript</li>
                                    <li className="mt-2">ES6</li>
                                    <li className="mt-2">Git</li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li className="mt-2">SASS</li>
                                    <li className="mt-2">HTML 5</li>
                                    <li className="mt-2">CSS 3</li>
                                    <li className="mt-2">Chrome DevTools</li>
                                </ul>
                            </div>
                            <div className="row col-md-5">
                                <ul>
                                    <li className="mt-2">Bootstrap 4</li>
                                    <li className="mt-2">Material-UI</li>
                                    <li className="mt-2">React-Bootstrap</li>
                                    <li className="mt-2">UX/UI</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <hr />
                <section className="about-section">
                    <div className="row">
                        <div className="col-md-4">
                            <h2>Education</h2>
                        </div>
                        <div className="col-md-8">
                            <ul>
                                <li className="mt-2">Bachelor's degree in Computer Science and Engineering from IUBAT</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <hr />
                <section className="about-section">
                    <div className="row">
                        <div className="col-md-4">
                            <h2>Language</h2>
                        </div>
                        <div className="col-md-4">
                            <ul>
                                <li className="mt-2">Bengali</li>
                                <li className="mt-2">English</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default About;
