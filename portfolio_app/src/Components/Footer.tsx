import { FaLinkedin, FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import '@fontsource/nunito/300.css';
import '@fontsource/nunito/400.css';
import '@fontsource/nunito/700.css';
import '@fontsource/merriweather/300.css';
import '@fontsource/merriweather/400.css';
import '@fontsource/merriweather/700.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/700.css';

export default function Footer() {
  return (
    <footer className="bg-slate-gray text-white p-4">
      <div className="container mx-auto flex justify-end space-x-4">
        <a
          href="mailto:madhankumar12002@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <CiMail size={24} />
        </a>

        <a
          href="https://www.linkedin.com/in/mks14"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/Madhan1204"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FaGithub size={24} />
        </a>
      </div>
    </footer>
  );
}
