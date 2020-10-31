import React from 'react';
import './Project.css';
import { useSpring, animated } from 'react-spring'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
// const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


const Project = ({ project }) => {

    const { image, title, keyFeatures1, keyFeatures2, keyFeatures3, shortDetails, repository, live, technology } = project;

    return (

        <div className="container d-flex my-5">
            <div className="row border border-secondary rounded p-5">
                <div className="col-md-6 ">
                    <a href={live} target="_blank"><h1>{title}</h1></a>
                    <p>{shortDetails}</p>
                    <ul>
                        <li className="mt-3">{keyFeatures1}</li>
                        <li className="mt-3">{keyFeatures2}</li>
                        <li className="mt-3">{keyFeatures3}</li>
                    </ul>
                    <div>
                        <p><span style={{ fontWeight: 'bold' }}>Build With: </span>{technology}</p>
                    </div>
                    <a href={live} target="_blank" className="btn btn-outline-info mr-3 font-weight-bold">
                        <FontAwesomeIcon icon={faGlobe} /><span className="ml-2">Website</span>

                    </a>
                    <a href={repository} target="_blank" className="btn btn-outline-dark font-weight-bold">
                        <FontAwesomeIcon icon={faGithub} /><span className="ml-2">GitHub</span>
                    </a>
                </div>

                <div className="col-md-6 projectImg animate__animated animate__fadeInRight animate__slow ">
                    <a href={live} target="_blank"><img src={image} className="mt-5 img-fluid trans-card " alt="" /></a>
                </div>

            </div>
        </div>


    );
};

export default Project;
