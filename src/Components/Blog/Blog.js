import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import blogs from '../../images/blog.png';

const Blog = () => {
    return (
        <div>   
            <Navbar></Navbar>
            <div className="text-center">
                <img src={blogs} className="img-fluid" alt=""/>
            </div>
        </div>
    );
};

export default Blog;