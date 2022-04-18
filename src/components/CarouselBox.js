import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import LandscapeImg from '../assets/Landscape-BW.jpg'
import cLandscapeImg from '../assets/Landscape-Color.jpg'

export default class CarouselBox extends Component {
    render() {
        return (
          <Carousel>
              <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={LandscapeImg}
                    alt="landscape"
                  />
                  
              </Carousel.Item>
               <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={cLandscapeImg}
                    alt="landscape"
                  />
                  
                 
              </Carousel.Item>
          </Carousel>
        );
    }
}

