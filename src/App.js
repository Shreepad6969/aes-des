import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import LiteratureSurvey from './components/LiteratureSurvey';
import Methodology from './components/Methodology';
import ResultsApplications from './components/ResultsApplications';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav style={navStyle}>
          <ul style={navListStyle}>
            <li><Link to="/" style={linkStyle}>Home</Link></li>
            <li><Link to="/literature-survey" style={linkStyle}>Literature Survey</Link></li>
            <li><Link to="/methodology" style={linkStyle}>Methodology</Link></li>
            <li><Link to="/results-applications" style={linkStyle}>Results & Applications</Link></li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/literature-survey" element={<LiteratureSurvey />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/results-applications" element={<ResultsApplications />} />
        </Routes>
      </div>
    </Router>
  );
}

const navStyle = {
  backgroundColor: '#333',
  padding: '10px 0',
  position: 'fixed',
  width: '100%',
  top: '0',
  left: '0',
  zIndex: '1000',
};

const navListStyle = {
  display: 'flex',
  justifyContent: 'center',
  listStyleType: 'none',
  padding: '0',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  margin: '0 20px',
  fontSize: '18px',
  textTransform: 'uppercase',
};

export default App;
