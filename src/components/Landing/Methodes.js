import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap'
import { ScrollSpy } from 'organism-react-scroll-nav'
import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.min.css"
import Deployer from './../../img/forwebsite/deployer.gif'
import Produire from './../../img/forwebsite/produire.gif'
import Imaginer from './../../img/forwebsite/imaginer.gif'

const Methodes = (props) => {
    return (
        <div className="Dark_section">
            <ScrollAnimation animateIn="fadeIn">
                <ScrollSpy id="t1">
                    <div style={{ opacity: "0", width: "100%", marginTop: "-100px", height: "100px", border: "solid 1px red"}}></div>
                    <h1 className="title_gif">Méthodes</h1>
                    <Container fluid="true">
                        <Row style={{width: "100%"}}>
                            <Col sm>
                                <h1 className="M_title">IMAGINER</h1>
                                <img className="gif" src={Imaginer} alt=""></img>
                                <br />
                                <p className="M_text"> Ensemble, nous conceptualisons vos idées et vos envies,
                                <strong className="M_color">pour une exposition la plus adaptée possible.</strong></p>
                            </Col>
                            <Col sm>
                                <h1 className="M_title">PRODUIRE</h1>
                                <img className="gif" src={Produire} alt=""></img>
                                <br/>
                                <p className="M_text">En collaboration avec les artistes,<strong className="M_color"> nous scénarisons et créons des œuvres uniques.</strong> </p>
                            </Col>
                            <Col sm>
                                <h1 className="M_title">DEPLOYER</h1>
                                <img className="gif" src={Deployer} alt=""></img>
                                <br/>
                                <p className="M_text"> Nous nous occupons de la mise en œuvre technique <strong className="M_color">de l’exposition une fois sur place.</strong></p>
                            </Col>
                        </Row>
                    </Container>
                </ScrollSpy>
            </ScrollAnimation>
        </div>
    )
   
}

export default Methodes