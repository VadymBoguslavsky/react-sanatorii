import React from 'react';
import { useTranslation } from 'react-i18next';

const ChangeLang = ({lan}) => {
  const { i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
    return (
        <span onClick={() => {
            changeLanguage(lan)
          }}>{lan}</span>
    );
  }

class Lang extends React.Component {
  state = {
    language: 'en'
  }
  changeLangState = () => {
    this.setState({
      language: this.state.language === 'uk' ? 'en' : 'uk'
    })
  }
  render(){
    return (
      <div className='change-language'>
        <button onClick={()=>{
            this.changeLangState()}
          }>
          <ChangeLang lan={this.state.language}/>
        </button>
      </div>
    )
  }
}
export default Lang;
