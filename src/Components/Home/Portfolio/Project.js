import React from 'react';
import './Project.css';
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


const Project = ({ project }) => {
    console.log(project);
    const { image, title, keyFeatures1, keyFeatures2, keyFeatures3, shortDetails, repo, live, reactLogo, firebaseLogo, mongoDBLogo, herokuLogo, htmlLogo, cssLogo, bootstrapLogo, jsLogo, apiLogo, materialuiLogo, nodeLogo, technology } = project;
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    return (
        <div className="container d-flex my-5">
            <div className="row">
                <div className="col-md-6">
                    <h1>{title}</h1>
                    <p>{shortDetails}</p>
                    <ul>
                        <li className="mt-3">{keyFeatures1}</li>
                        <li className="mt-3">{keyFeatures2}</li>
                        <li className="mt-3">{keyFeatures3}</li>
                    </ul>
                    <div>
                        <p><span style={{ fontWeight: 'bold' }}>Build With: </span>{technology}</p>
                    </div>
                    <a href={live} target="_blank"><button className="btn btn-outline-info mr-3 font-weight-bold">See Live</button></a>
                    <a href={repo} target="_blank"><button className="btn btn-outline-dark font-weight-bold">Source Code</button></a>
            </div>
                <div className="col-md-6 projectImg">
                    <img src={image} className="mt-5 img-fluid" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Project;
