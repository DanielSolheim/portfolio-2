import React from 'react';
import ContactCard from './ContactCard';
import ContactForm from './ContactForm';
import * as yup from 'yup';


export default function Contact(){
  return (
    <div className="Contact">
           <ContactCard />
           <ContactForm />
    </div>

  );
}
