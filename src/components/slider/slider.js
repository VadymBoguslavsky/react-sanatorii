import React from 'react';
import Slider from "react-slick";
import './slider.css'
function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('../../assets/img/full/', false, /\.(png|jpe?g|svg)$/));



class SimpleSlider extends React.Component {
    render() {
      var settings = {
        arrows: true,
        infinite: true,
        draggable: true,
      };
      console.log(images)
      const image = images.map((image,index)=>{
        return (
          <div className='slider'>
            <img className='slider-images' key={index} src={image}   alt="" />
          </div>
        )
      })
      return (
        <Slider {...settings}>
          {image}
        </Slider>
      );
    }
  }
export default SimpleSlider;
