import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './Pages/Hero';
import AboutMe from './Pages/About';
import ProjectsPage from './Pages/Projects';
import Heroone from './Pages/ContactPage';
import Layout from './Layout/MainLayout';

function App() {
  return (
    <>
      <Router>
      <Layout>
      <main className='pt-16'>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<Heroone />} />
        {/* Add other routes here */}
      </Routes>
      </main>
      </Layout>
    </Router>
    </>
  );
}

export default App;
