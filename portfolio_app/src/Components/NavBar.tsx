import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import '@fontsource/nunito/300.css';
import '@fontsource/nunito/400.css';
import '@fontsource/nunito/700.css';
import '@fontsource/merriweather/300.css';
import '@fontsource/merriweather/400.css';
import '@fontsource/merriweather/700.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/700.css';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-black p-4 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <NavLink to="/" className="flex items-center">
            <img src="/assets/logo/Madhan.svg" alt="Logo" className="h-8 w-8 mr-2" />
            <span className="text-black text-xl font-bold">Madhan Codes</span>
          </NavLink>
        </div>
        <div className="hidden md:flex flex-1 justify-center space-x-6">
          <NavLink
            to="/about"
            className={({ isActive }) => 
              `relative p-2 text-black transition duration-300 ease-in-out ${isActive ? 'bg-slate-700 text-white border-slate-700' : 'hover:bg-slate-700 hover:border-slate-700 hover:text-white border border-transparent'} rounded-full`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => 
              `relative p-2 text-black transition duration-300 ease-in-out ${isActive ? 'bg-slate-700 text-white border-slate-700' : 'hover:bg-slate-700 hover:border-slate-700 hover:text-white border border-transparent'} rounded-full`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => 
              `relative p-2 text-black transition duration-300 ease-in-out ${isActive ? 'bg-slate-700 text-white border-slate-700' : 'hover:bg-slate-700 hover:border-slate-700 hover:text-white border border-transparent'} rounded-full`
            }
          >
            Contact
          </NavLink>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-neutral focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <NavLink to="/about" className="block px-4 py-2 hover:bg-slate-700 hover:text-white">About</NavLink>
          <NavLink to="/projects" className="block px-4 py-2 hover:bg-slate-700 hover:text-white">Projects</NavLink>
          <NavLink to="/contact" className="block px-4 py-2 hover:bg-slate-700 hover:text-white">Contact</NavLink>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
