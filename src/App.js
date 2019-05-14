import React from 'react';
import About from './components/about/about.js';
import Header from './components/header/header.js'
import SimpleSlider from './components/slider/slider.js'
import Footer from './components/footer/footer.js'

import 'normalize.css';

function App() {
  return (
    <div className = "App">
      <Header/>
      <SimpleSlider/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
