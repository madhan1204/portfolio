import { Img } from 'react-image';
import { Link } from 'react-router-dom';
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

const Hero = () => {
  return (
    <>
    <section className="relative bg-gradient-radial from-primary to-[#3581e4] text-neutral overflow-hidden">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between min-h-screen">
        {/* Left Side - Text and Button */}
        <div className="flex flex-col items-start justify-center text-left space-y-8 p-8">
          <h1 className="text-5xl md:text-7xl font-bold font-poppins text-highlight">
            Aspiring Full-Stack Developer & AI Enthusiast
          </h1>
          <p className="mt-2 text-lg md:text-2xl font-merriweather text-accent">
            Passionate about building scalable web solutions and integrating AI/ML in innovative ways.
          </p>
          <Link to="/projects">
            <button className="mt-8 px-6 py-3 bg-highlight text-neutral font-semibold rounded-lg hover:bg-red-100 hover:shadow-lg transition duration-300 ease-in-out">
              Discover My Work
            </button>
          </Link>
        </div>

        {/* Right Side - Image */}
        <div className="relative w-full md:w-1/2 h-auto md:pl-16 md:pr-16 md:ml-auto flex justify-center md:justify-end">
          <Img
            src="/assets/images/Hero2.png"
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

export default Hero;
