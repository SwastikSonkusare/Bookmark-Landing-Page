import React from 'react'

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Faq from './components/Faq/Faq';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';

const App = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Card />
            <Faq />
            <ContactUs />
            <Footer />
        </>
    )
}

export default App
