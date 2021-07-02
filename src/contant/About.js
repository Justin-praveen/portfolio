import React from 'react';
import { Element } from 'react-scroll';
import { Container } from 'react-bootstrap';
import '../contant/About.css';
import jb from "../contant/jb.jpg"

export const About = () => {
    return (
        <div className="atop">
            <Element name="about me">
                <Container  className="cafull">
                    
                        <div className="d1">
                            <img src={jb} alt="img" width="250" height="250px" className="img-a"></img>
                        </div>
                        <div className="d2">
                            <h1>
                                About me

                            </h1>
                            <p>
                               Hello! Iam praveen full stack developer and ethical hacker,i want to mining my knowledge
                               in my programing skills and new inovations. basically I am a white-Hat hacker, i to intrested
                               in cybersecurity feild also,Looking forward to earning the position of Software Engineer
                               at a leading organization to showcase my skills in programming to generate high-end solutions,
                               to general software issues along with drawing better user experience. 
                                

                            </p>

                        </div>
                    
                    


                </Container>

            </Element>
            
        </div>
    )
}

export default About;
