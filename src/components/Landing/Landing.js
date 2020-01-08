import React, {Component} from 'react'
import { SmoothScrollLink, ScrollSpy } from 'organism-react-scroll-nav'
import Methodes from './Methodes'
import Logo from './../../img/forwebsite/main-logo.png'
import './../../reset.css'
import Offres from './Offres'
import Contact from './Contact'
import Partenaires from './Partenaires'
import Menu from './../../img/forwebsite/menu.png'
import Cross from './../../img/forwebsite/cross.png'

class Landing extends Component {
    constructor() {
        super()
        this.state= {
            isMobile: window.innerWidth <= 600 ? true : false,
            W_height: window.innerHeight,
            expand: false,
        }
        window.addEventListener("resize", this.update);
        this.expand = this.expand.bind(this)
    }

    update = () => {
        this.setState({ 
            isMobile: window.innerWidth <= 640 ? true : false,
            W_height: window.innerHeight,
        })
        if (!this.state.isMobile)
            this.setState({expand: false})
    }

    expand() {
        this.setState( prevState => { return { expand: !prevState.expand } })
    }

    render() {
        const Height = this.state.W_height * .9;
        return (
            <div>
                <ScrollSpy id="t0">
                    <div id="nav-parent" className="main" style={{ height: `${Height}px`,}} >
                        <div className="topbar">
                            <img 
                                    src={this.state.expand ? Cross : Menu}
                                    alt=""
                                    style={{position: "absolute", display: this.state.isMobile  ? "inline-block" : "none", left: 0, top: "40px", width: "17%", zIndex: "50"}}
                                    onClick={this.expand}
                                    ></img>
                                <SmoothScrollLink targetId="t0" className="nav_link" ><img className="main_logo" src={Logo} alt=""/></SmoothScrollLink>
                                <div className={this.state.expand ? "m_link" : "link"}>
                                    <SmoothScrollLink targetId="t1" className="nav_link" > <p onClick={this.state.isMobile? this.expand : null}> METHODES</p> </SmoothScrollLink>
                                    <SmoothScrollLink targetId="t2" className="nav_link" > <p onClick={this.state.isMobile? this.expand : null }> OFFRES</p> </SmoothScrollLink>
                                    <SmoothScrollLink targetId="t3" className="nav_link" >  <p onClick={this.state.isMobile? this.expand : null}> TEAM</p> </SmoothScrollLink>
                                    <SmoothScrollLink targetId="t4" className="nav_link" >  <p onClick={this.state.isMobile? this.expand : null}> PARTENAIRES</p> </SmoothScrollLink>
                                </div>
                        </div>
                        <div className="main_titles">
                            <h1 className="title">L’expérience numérique <br /> au cœur de votre réalité</h1>
                            <div style={{width: "100%", height: "50px"}}></div><p className="title" style={{fontSize: this.state.isMobile ? ".8em" : "1em", fontWeight: "500"}}>Visionae est une agence de création d’expériences numériques au service de l'Art et de la culture. </p>
                        </div>
                    </div>
                    <Methodes  isMobile= {this.state.isMobile}/>
                    <Offres  isMobile= {this.state.isMobile}/>
                    <div className="Break"></div>
                    <Contact isMobile= {this.state.isMobile}/>
                    <Partenaires />
                    <p style={{backgroundColor: "black", textAlign: "center", color: "white", fontSize: "1.5em"}}> © Visionae - 2019</p>
                </ScrollSpy>
            </div>
        )
    }
   
}

export default Landing