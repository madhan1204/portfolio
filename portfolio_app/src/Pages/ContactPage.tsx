import { Img } from 'react-image';
import ContactForm from '../Components/ContactForm';
import '@fontsource/nunito/300.css';
import '@fontsource/nunito/400.css';
import '@fontsource/nunito/700.css';
import '@fontsource/merriweather/300.css';
import '@fontsource/merriweather/400.css';
import '@fontsource/merriweather/700.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/700.css';

// Define your font classes (if required) or simply apply them in the JSX

const Heroone = () => {
  return (
    <>
    <section className="relative bg-gradient-radial from-primary to-[#3581e4] text-neutral overflow-hidden">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between min-h-screen">
        {/* Left Side - Text and Button */}
        <div className="flex flex-col items-start justify-center text-left space-y-8 p-8">
          <h1 className="text-5xl md:text-7xl font-bold font-poppins text-highlight">
          Contact Me
          </h1>
          <p className="mt-2 text-lg md:text-2xl font-merriweather text-accent">
          If you have any questions or just want to get in touch, feel free to fill out the form below.
          </p>
          <ContactForm></ContactForm>
        </div>

        {/* Right Side - Image */}
        <div className="relative w-full md:w-1/2 h-auto md:pl-16 md:pr-16 md:ml-auto flex justify-center md:justify-end">
          <Img
            src="/assets/images/Hero.png"
            alt="Your Image"
            className="rounded-full shadow-lg object-contain"
            style={{ maxHeight: '100%', maxWidth: '100%' }}
          />
        </div>
      </div>
    </section>
    </>
  );
};

export default Heroone;
