import React from 'react'
import { Element } from 'react-scroll';
import '../contant/Contact.css';
import { Container } from 'react-bootstrap';
import f from '../contant/f.png';
import i from '../contant/i.png';
import t from '../contant/t.png';
import g from '../contant/g.png';
const Contact = () => {
    return (
        <Element name="contact">
            <Container fluid className="cfull">
                <Container className="chalf">
                <div className="cfd">
                <ul>
                    <li>
                        <a href="/">

                        <img src={f} width="50px" height="50px" alt="f" className="ib"></img>

                        </a>
                    </li>
                    <li>
                        <a href="/">

                        <img src={i} width="50px" height="50px" alt="f" className="ib"></img>

                        </a>
                    </li>
                    <li>
                        <a href="/">

                        <img src={t} width="50px" height="50px" alt="f" className="ib"></img>

                        </a>
                    </li>
                    <li>
                        <a href="/">

                        <img src={g} width="50px" height="50px" alt="f" className="ib"></img>

                        </a>
                    </li>

                </ul>
        </div>
        <div className="by"><p>Designed by @praveen</p></div>
                </Container>
            </Container>
            
            
        </Element>
    )
}

export default Contact;
