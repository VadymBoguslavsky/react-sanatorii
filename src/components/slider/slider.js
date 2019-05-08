import React from 'react';
import Slider from "react-slick";
import './slider.css'
function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('../../assets/img/full/', false, /\.(png|jpe?g|svg)$/));



class SimpleSlider extends React.Component {
    render() {
      const imgUrl = '../../assets/img/full/about.jpg'
      const styles = {
          backgroundImage: 'url(' + imgUrl + ')'
      };
      var settings = {
        arrows: true,
        infinite: true,
        draggable: true,
        responsive: [
         {
          breakpoint: 1000,
          settings: {
           dots: true
          }
         }
        ]
      };
      console.log(images)
      const image = images.map((image,index)=>{
        return (
            <img className='slider-images' key={index} src={image}   alt="" />
        )
        })
      console.log(image)
      return (
        <Slider {...settings}>
          {image}
        </Slider>
      );
    }
  }
export default SimpleSlider;
