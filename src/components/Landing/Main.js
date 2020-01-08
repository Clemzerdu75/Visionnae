import React from 'react'
import Logo from './../../img/forwebsite/main-logo.png'

const Main = (props) => {
    const Height= props.Height * .9;

    return(
        <div className="main" style={{ height: `${Height}px`,}} >

            <div className="topbar">
                <a href="#"><img className="main_logo" src={Logo} alt="" /></a>
                <div className="link">
                    <a href="#methodes">METHODES&nbsp;&nbsp;</a>
                    <a href="#offres">OFFRES&nbsp;&nbsp;</a>
                    <a href="#team">TEAM&nbsp;&nbsp;</a>
                    <a href="#partenaire">PARTENAIRES</a>
                </div>
            </div>

            <div className="main_titles">
                <h1 className="title">L’expérience numérique <br /> au cœur de votre réalité</h1>
                <div style={{width: "100%", height: "50px"}}></div><p className="title" style={{fontSize: props.isMobile ? ".8em" : "1em", fontWeight: "500"}}>Visionae est une agence de création d’expériences numériques au service de l'Art et de la culture. </p>
            </div>

        </div>
    )
}

export default Main