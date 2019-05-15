import React from 'react';
import About from './components/about/about.js';
import HeaderWrapper from './components/header/header-wrapper.js'
import SimpleSlider from './components/slider/slider.js'
import Footer from './components/footer/footer.js'

import 'normalize.css';

import { I18nextProvider } from 'react-i18next';
import i18n from './utils/i18n';

function App() {
  return (
    <div className = "App">
      <I18nextProvider i18n={i18n}>
        <HeaderWrapper/>
        <SimpleSlider/>
        <About/>
        <Footer/>
      </I18nextProvider>
    </div>
  );
}

export default App;
