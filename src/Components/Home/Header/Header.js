import React from 'react';
import MainHeader from '../MainHeader/MainHeader';
import Navbar from '../Navbar/Navbar';
import img from '../../../images/top-banner.png';
import { Parallax } from 'react-parallax';

const Header = () => {
    return (
        <Parallax bgImg={img} strength={500}>
            <Navbar></Navbar>
            <MainHeader></MainHeader>
        </Parallax>
    );
};

export default Header;