import React, {useState}  from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import Data from '../components/Data';
import {DataObjOne} from '../components/Data/Data';
import CV from '../components/CV';



const ProjectsPage = () => {
    const [ isOpen, setIsOpen ] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
          <Sidebar isOpen = {isOpen} toggle={toggle} />
          <Navbar toggle={toggle} /> 
          <HeroSection />
          <CV /> 
          <Data {...DataObjOne} />
          
          <Footer />
        </>
    );
};

export default ProjectsPage;
