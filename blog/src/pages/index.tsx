import React, {useState}  from 'react';


import Navbar from '../components/NavBar/Navbar';
import HeroSection from '../components/HeroSection';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import Services from '../components/Services/Services';



const Home = () => {
    const [ isOpen, setIsOpen ] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
        <Navbar />    
        <HeroSection />
        <About />
        <Services />
        <Footer /> 
        </>
    );
};

export default Home;
