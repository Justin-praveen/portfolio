import React from 'react';
import { Container,Carousel } from 'react-bootstrap';
import me from '../contant/cer1.png';
import ja from '../contant/cer2.png';
import pi from '../contant/cer3.png';
import { Element } from 'react-scroll';
import '../contant/Certificate.css';

const Certificate = () => {
    return (
        <div>
            <Element name="certificate">
            <Container fluid className="carc-1">
                <Container className="carc">
                    <div className="cars">
                    <Carousel variant="dark">
                    
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={me}
                        alt="First slide"
                        width="500px"
                        height="500px"
                      />
                      <Carousel.Caption>
                        <h3>Javascript</h3>
                        <p>The certificate by Guvi</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={ja}
                        alt="Second slide"
                        width="500px"
                        height="500px"
                      />
                      <Carousel.Caption>
                        <h3>HTML & CSS</h3>
                        <p>The certificate by Guvi</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={pi}
                        alt="Third slide"
                        width="500px"
                        height="500px"
                      />
                      <Carousel.Caption>
                        <h3>Ethical hacking</h3>
                        <p>The certificate by udemy</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                    </div>
                </Container>
            </Container>
            </Element>
        </div>
    )
}

export default Certificate;
