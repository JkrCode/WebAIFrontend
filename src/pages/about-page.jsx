import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFillChatSquareHeartFill } from 'react-icons/bs';
import { roundedImageStyle } from '../helper-functions'
import containerStyle from '../helper-functions';
import { overlayStyle } from '../helper-functions';

function About() {
  

  const carouselItemStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const textContainerStyle = {
    flex: '1',
  };

  return (
    <div style={containerStyle}>
      <div className="container" style={overlayStyle}>
        <div className="row justify-content-center">
          <div className="col-sm-9">
            <h1 className="text-center" style={{ padding: '20px', fontWeight: 'bold' }}>
              <BsFillChatSquareHeartFill /> Fantasy Media
            </h1>
          </div>
        </div>
        <div className="row justify-content-center" style={{marginBottom: "100px"}}>
          <div className="col-sm-9">
            <h3 className="text-center">
              To empower and connect individuals through an innovative and responsible social media platform, fostering authentic relationships and positive societal impact
            </h3>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-9">
            <div className="vertical-carousel">
              <Carousel data-bs-theme="dark">
                <Carousel.Item>
                  <div style={carouselItemStyle}>
                    <img
                      src="../src/assets/image1.jpg"
                      alt="First slide"
                      style={roundedImageStyle}
                    />
                    <div style={textContainerStyle}>
                      <h5>First slide label</h5>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div style={carouselItemStyle}>
                    <img
                      src="../src/assets/image2.jpg"
                      alt="Second slide"
                      style={roundedImageStyle}
                    />
                    <div style={textContainerStyle}>
                      <h5>Second slide label</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
