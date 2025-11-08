import React from 'react';
import './App.css'; // we’ll create our own styles
import Hero from './Hero';
import About from './components/About';
import Services from './components/Services';
import Musicians from './components/Musicians';
import Contact from './components/Contact';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      {/* Landing page content will go here */}
      <Header />
      <Hero />
      <About />
      <Services />
      <Musicians />
      <Contact />
    </div>
  );
}

export default App;