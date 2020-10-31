import React from 'react';
import Project from './Project';
import creativeAgency from '../../../images/creative-agency2.png';
import travelling from '../../../images/travel.png';
import volunteerNetwork from '../../../images/volunteer-network2.png';

const Projects = () => {
    const fakeData = [
        {
            title: 'Creative Agency',
            image: creativeAgency,
            shortDetails: 'Complete MERN stack website for Graphis Design company who sales different types of services.',
            keyFeatures1: 'Customer can place an order, cancel the order, manage his order history and post review about the services.',
            keyFeatures2: 'Admin can add new service, update the order status, add a new admin to the system and check who place the order from the Admin Dashboard.',
            keyFeatures3: 'Separate user interface and functionality access for both admin and customer from their dashboard.',
            technology: 'React.js, Node.js, Bootstrap, Firebase, MongoDB, Heroku, REST-API',
            repo: 'https://github.com/Sadia-web/creative-agency-client',
            live: 'https://creative-agency-client-82ec8.web.app/',
        },
        {
            title: 'Volunteer Network',
            image: volunteerNetwork,
            shortDetails: 'Complete MERN stack website for volunteer organizations who manage different types of volunteer activities.',
            keyFeatures1: 'Any user can register for single/multiple events with specific dates.',
            keyFeatures2: 'User can cancel their registered events from their Dashboard.',
            keyFeatures3: 'Admin can see all registered events list and add a new event from his dashboard.',
            technology: 'React.js, Node.js, Bootstrap, Firebase, MongoDB, Heroku, REST-API.',
            repo: 'https://github.com/Sadia-web/volunteer-network-client',
            live: 'https://volunteer-network-client-fba05.web.app/',

        },
        {
            title: 'Manage Travelling',
            image: travelling,
            shortDetails: 'A hotel booking website based on the place you want to visit. The system will recommend available hotels near your travel destination.',
            keyFeatures1: 'After select, any location system will show short details about each destination.',
            keyFeatures2: 'Used Google Map for showing available hotels for booking the travel destination.',
            keyFeatures3: 'Customer can register manually, By their G-mail or Facebook account for book any hotel.',
            technology: 'React.js, Bootstrap, Firebase, REST-API, Firebase auth.',
            repo: 'https://github.com/Sadia-web/manage-travelling',
            live: 'https://manage-travelling.firebaseapp.com/',

        }      
    ]


    return (

        <div className="container">

            <h1 className="text-center py-5 " style={{ fontWeight: 700 }}>PROJECTS</h1>

            <div className="row mb-5" id="my-work">
                {
                    fakeData.map(project => <Project project={project}></Project>)
                }
            </div>
            <div>
                <a href="/allProjects" className="btn btn-success w-100 font-weight-bold">VIEW ALL PROJECTS</a>
            </div>
        </div>
    );
};

export default Projects;