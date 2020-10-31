import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import error from '../../images/error.jpg';

const NoMatch = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="text-center">
                <img src={error} className="img-fluid alt=" />
            </div>
        </div>
    );
};

export default NoMatch;<h5>Sorry!</h5>