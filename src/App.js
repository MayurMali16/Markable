import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Newsfeed from './components/Newsfeed';
import RightPanel from './components/Rightpanel';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1 flex-col md:flex-row">
        <Sidebar />
        <Newsfeed />
        <RightPanel />
      </div>
      <Footer />
    </div>
  );
};

export default App;
