import React, { ReactNode } from 'react';
import Navbar from '../Components/NavBar'; // adjust the path as necessary
import Footer from '../Components/Footer'; // adjust the path as necessary

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen max-w-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

