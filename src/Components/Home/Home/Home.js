import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Projects from '../Portfolio/Projects';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Projects></Projects>
            <Footer></Footer>
        </div>
    );
};

export default Home;
