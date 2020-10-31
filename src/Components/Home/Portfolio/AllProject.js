import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const AllProject = ({ allProject }) => {

    const { title, image, live, repository, technology, shortDetails } = allProject;

    return (
        <div className="container">
            <div class="card mb-5 ">
                <img src={image} class="card-img-top trans-card" alt="..." />
                <div class="card-body">
                    <h1 class="card-title">{title}</h1>
                    <p class="card-text">{shortDetails}</p>
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
            </div>
        </div>
    );
};

export default AllProject;
