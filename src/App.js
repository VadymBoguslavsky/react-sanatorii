import React from 'react'
import About from './components/about/about.js'
import HeaderWrapper from './components/header/header-wrapper.js'
import SimpleSlider from './components/slider/slider.js'
import Footer from './components/footer/footer.js'
import i18n from './utils/i18n'
import 'normalize.css'

import { I18nextProvider } from 'react-i18next';

function App() {
  return (
    <I18nextProvider i18n={i18n}>

      <div className = "App">
        <HeaderWrapper/>
        <SimpleSlider/>
        <About/>
        <Footer/>
      </div>
    </I18nextProvider>

  );
}

export default App;
