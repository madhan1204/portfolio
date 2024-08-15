import React from 'react';
import ContactForm from '../Components/ContactForm'; // Adjust the path if needed

const ContactPage: React.FC = () => {
  return (
    <section className="relative bg-gray-100 p-8 pt-16">
      {/* <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Contact Me</h2>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="w-full max-w-3xl">
            <p className="text-center text-gray-600 mb-8">
              If you have any questions or just want to get in touch, feel free to fill out the form below.
            </p>
            <ContactForm />
          </div>
        </div>
      </div> */}
      <ContactForm />
    </section>
  );
};

export default ContactPage;
