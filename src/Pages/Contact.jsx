import React from 'react';
import Navigation from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";
import '../styles/components/Contact.scss'
import ContactComponent from "../components/ContactComponent.jsx";

function Contact() {
    return (
        <>
            <Navigation></Navigation>
               <ContactComponent></ContactComponent>
                <Footer></Footer>
        </>
    );
}
export default Contact;