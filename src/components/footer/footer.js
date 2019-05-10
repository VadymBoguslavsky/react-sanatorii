import React from 'react';

import './footer.css'

const Footer = () => {
  return (
    <div>
    <footer className ="footer">
      <div className="phone__number">
        <p>Санаторий “Джерельний” контакты:</p>
        <a className="kievstar" href="tel:+38 (097) 90 42 553">+38 (097) 90 42 553</a>
        <a className="kievstar" href="tel:+38 (067) 75 76 844">+38 (067) 75 76 844</a>
        <a className="vodaphone" href="tel:+38 (066) 73 55 190">+38 (066) 73 55 190</a>
        <a className="mtc" href="tel:+38 (095) 90 30 126">+38 (095) 90 30 126</a>
        <a href="tel:(032) 47 59 805">(032) 47 59 805</a>
      </div>
      <div className="net__contact">
        <p>guapa1211</p>
        <div>
          <p className="email__link">Email us to:</p>
          <a href="mailto:Dgerelniy@ukr.net">Dgerelniy@ukr.net</a>
        </div>

      </div>
    </footer>
    <div className = "call_us__mobile"></div>
    </div>
  )
}
export default Footer;
