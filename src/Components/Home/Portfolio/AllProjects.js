import React from 'react';

import countries from '../../../images/countries-information.png';
import hotGadget from '../../../images/hot-gadgets.png';

import eSchool from '../../../images/e-school-resource.png';
import eBank from '../../../images/pioneer-bank.png';
import pinMatcher from '../../../images/pin-matcher.png';
import socialFriend from '../../../images/online-friends.png';
import course from '../../../images/online-course.png';
import emaJohn from '../../../images/ema-john.png';
import burjAlArab from '../../../images/burj-al-arab.png';
import panda from '../../../images/panda-e-commerce.png';
import AllProject from './AllProject';
import Footer from '../Footer/Footer';

const AllProjects = () => {

    const fakeData = [
        {
            title: 'Countries Information',
            shortDetails: 'A responsive website which is contain 250+ countries details. After select a particular country user can get know more details about the countries',
            image: countries, 
            repository: 'https://github.com/Sadia-web/countries-information',
            live: 'xnxxn',
            technology: 'React, Material-UI, REST-API, HTML, CSS'

        },
        {
            title: 'Pin Matcher',
            shortDetails: 'Online pin matcher application. System will automatically generate 4 digit pin. If any user input the wrong input more than 3 times system will automatically closed the input submission.',
            image: pinMatcher,
            repository: 'https://github.com/Sadia-web/pin-matcher',
            live: 'https://sadia-web.github.io/pin-matcher/index.html',
            technology: 'HTML, CSS, Bootstrap, JavaScript'

        },
        {
            title: 'E-Bank',
            shortDetails:  'A single page web application with the basic Login, Deposit, Withdraw, Balance Check functionality',
            image: eBank,
            repository: 'https://github.com/Sadia-web/pioneer-bank',
            live: 'https://sadia-web.github.io/pioneer-bank/',
            technology: 'HTML, CSS, Bootstrap, JavaScript'

        },
        {
            title: 'E-School-Website',
            shortDetails: 'A responsive design for online school.',
            image: eSchool,
            repository: 'https://github.com/Sadia-web/e-school-resources',
            live: 'https://sadia-web.github.io/e-school-resources/',
            technology: 'HTML, CSS, JavaScript'

        },
        {
            title: 'Hot Gadgets',
            shortDetails: 'An E-commerce website landing page who sales different types of products. The site is fully responsive and user-friendly interface.',
            image: hotGadget,
            repository: 'https://github.com/Sadia-web/hot-gadgets',
            live: 'https://sadia-web.github.io/hot-gadgets/',
            technology: 'HTML, CSS, JavaScript, Bootstrap'

        },
        {
            title: 'Online Course',
            shortDetails: 'Anyone can buy books or take courses from anywhere',
            image: course,
            repository: 'https://github.com/Sadia-web/online-courses',
            live: 'https://peaceful-davinci-1b60e8.netlify.app/',
            technology: 'HTML, CSS, JavaScript, Bootstrap, React'
        },
        {
            title: 'Panda Commerce', 
            shortDetails: 'An E-commerce website landing page who sales different types of products. The site is fully responsive and user-friendly interface.',
            image: panda,
            repository: 'https://github.com/Sadia-web/panda-commerce',
            live: 'https://sadia-web.github.io/panda-commerce/',
            technology: 'HTML, CSS, JavaScript, Bootstrap'

        },
        {
            title: 'Ema John',
            shortDetails: 'An E-commerce where user can add to cart, check order history, admin can manage inventory and more.',
            image: emaJohn,
            repository: 'https://github.com/Sadia-web/ema-john-simple',
            live: 'https://ema-john-simple-30309.web.app/',
            technology: 'HTML, CSS, JavaScript, Bootstrap, React, Firebase, Rest API, Netlify'

        },
        {
            title: 'Social Friends',
            shortDetails: 'Responsive online blog website with static blog content. User information and blog content manage by multiple 3rd party API.',
            image: socialFriend,
            repository: 'https://github.com/Sadia-web/social-friends',
            live: 'jbcdjh',
            technology: 'React, Material UI, REST-API, HTML, CSS'

        },
        {
            title: 'Burj Al Arab',
            shortDetails: 'A responsive hotel room booking website with limited access control.',
            image: burjAlArab,
            repository: 'https://github.com/Sadia-web/burj-al-arab',
            live: 'gbujh',
            technology: 'React, Firebase, Google Auth, Material-UI, REST-API, HTML, CSS'

        }
    ];
    return (
        <div className="container">
            {/* <Navbar></Navbar> */}
            <h1 className="text-center py-5 " style={{ fontWeight: 700 }}>ALL PROJECTS</h1>

            <div className="row">
                {
                    fakeData.map(allProject => <AllProject allProject={allProject}></AllProject>)
                }
            </div>
            <Footer></Footer>
    </div>
    );
};

export default AllProjects;