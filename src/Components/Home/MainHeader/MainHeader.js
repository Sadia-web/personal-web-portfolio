import React from 'react';
import './MainHeader.css'
import image from '../../../images/hi.jpg';
import Typical from 'react-typical';
import { useSpring, animated } from 'react-spring'

const MainHeader = () => {
    const props = useSpring({ opacity: 1, from: { opacity: 0 } })

    return (
        <div className="container">
            <div className="d-flex" style={{ height: 700 }}>
                <div className="d-flex align-self-center">
                    <div className="row">
                        <div className="col-md-10">
                        <h4 className="text-secondary">HELLO, I'M</h4>
                            <h1 style={{ fontWeight: 700 }}>Sadia Sultana</h1>
                        <p className="text-secondary">
                            {' '}
                            <Typical
                                loop={Infinity}
                                wrapper='b'
                                steps={[
                                    'Font-End Web Developer',
                                    1000,
                                    'Expert in developing',
                                    1000,
                                    'Single page application',
                                    1000,
                                    'Using...',
                                    1000,
                                    'React',
                                    1000,
                                    'Node.js',
                                    1000,
                                    'Express.js',
                                    1000,
                                    'MongoDB',
                                    1000,
                                    'And more...',
                                    1000,

                                ]}
                            />
                        </p>
                            <a class="btn btn-info my-4  btn-lg" href="https://drive.google.com/file/d/1yi4zszR1HkX03HDWQYotNn_XtxGP1R4t/view?usp=sharing" target="_blank">My Resume</a>
                    </div>
                        <div className="col-md-2" >
                            <img src={image} alt="" style={{ height: 500 }} className="rounded-circle" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;
