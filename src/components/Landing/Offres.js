import React, {Component} from 'react'
import Cross from './../../img/forwebsite/cross.png'
import { ScrollSpy } from 'organism-react-scroll-nav'
import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.min.css"

class Offres extends Component {
    constructor(props) {
        super(props);
        this.state= {
            section: 0,
        }
        this.changeState0 = this.changeState0.bind(this)
        this.changeState1 = this.changeState1.bind(this)
        this.changeState2 = this.changeState2.bind(this)
        this.changeState3 = this.changeState3.bind(this)
    }

    changeState0(e) {
        this.setState({ section: 0})
    }
    
    changeState1(e) {
        if (this.state.section !== 1)
            this.setState({ section: 1})
        else
            this.setState({ section: 0})
    }

    changeState2(e) {
        if (this.state.section !== 2)
            this.setState({ section: 2})
        else
            this.setState({ section: 0})
    }

    changeState3(e) {
        if (this.state.section !== 3)
        this.setState({ section: 3})
    else
        this.setState({ section: 0})
    }

    render() {
        return(
            <div className="Dark_section">
                <ScrollAnimation animateIn="fadeIn">
                    <ScrollSpy id="t2">
                    <div style={{ opacity: "0", width: "100%", marginTop: "-100px", height: "100px", border: "solid 1px red"}}></div>
                        <h1 className="title_gif">Offres</h1>
                        <div className="fixed_layer">
                            <p className="O_text" style={{display:this.state.section === 0 ? "block" : "none"}}>
                                Nous pensons que chaque lieu est unique et a une histoire à respecter.
                                <strong className="O_color"> L'enjeu est pour nous, de créer des solutions
                                numériques créatives et uniques afin que les lieux offrent une autre réalité,
                                plus expérientielle, plus immersive.
                                Nos outils permettent de sublimer l’unicité d’un site en révélant une oeuvre non visible
                                à l'oeil nu ou de vivre une expérience pédagogique unique afin d'offrir à tous un
                                nouveau regard sur le monde qui nous entourent.</strong>
                            </p>

                            <ul className="O_text" style={{display:this.state.section === 1 ? "block" : "none"}}>
                                    <img onClick={this.changeState0} className="O_cross" src={Cross} alt=""></img>
                                    <p>Faire vivre des expériences pédagogiques et novatrices.</p>
                                    <br />
                                    <li>Scénarios animés</li>
                                    <li>Personnages modélisés</li>
                                    <li>Éléments reconstitués en 3D</li>
                                    <li>Parcours immersifs</li>
                            </ul>

                            <ul className="O_text" style={{display:this.state.section === 2 ? "block" : "none"}}>
                            <img onClick={this.changeState0} className="O_cross" src={Cross} alt=""></img>
                                <p>Concevoir des scénographies inédites dans des lieux inédits.</p>
                                <br/>
                                <li>Installations génératives</li>
                                <li>Dispositifs audiovisuels</li>
                                <li>Œuvres interactives</li>
                                <li>Expositions augmentées</li>
                                <li>Mapping</li>
                            </ul>

                            <ul className="O_text" style={{display:this.state.section === 3 ? "block" : "none"}}>
                            <img onClick={this.changeState0} className="O_cross" src={Cross} alt=""></img>
                                <p>Nous proposons des supports et outils de communication permettant de prolonger l’expérience du public. Il s’agit pour les entreprises et les institutions d’affirmer leur positionnement numérique. </p>
                                <br/>
                            </ul>
                            {this.props.isMobile ? 
                                <div className="button_div">
                                    <button onClick={this.changeState1} className="O_button" style={{backgroundColor: this.state.section === 1 ? "white" : null, color: this.state.section === 1 ? "black" : null }}>Médiation<br />Culturelle</button>
                                    <button onClick={this.changeState2} className="O_button" style={{backgroundColor: this.state.section === 2 ? "white" : null, color: this.state.section === 2 ? "black" : null }}>Evénementiel<br />Artistique</button>
                                    <button onClick={this.changeState3} className="O_button" style={{backgroundColor: this.state.section === 3 ? "white" : null, color: this.state.section === 3 ? "black" : null }}>Produits<br />Dérivés</button>
                                </div> :
                                <div className="button_div">
                                    <button onClick={this.changeState1} className="O_button" style={{backgroundColor: this.state.section === 1 ? "white" : null, color: this.state.section === 1 ? "black" : null }}>Médiation Culturelle</button>
                                    <button onClick={this.changeState2} className="O_button" style={{backgroundColor: this.state.section === 2 ? "white" : null, color: this.state.section === 2 ? "black" : null }}>Evénementiel Artistique</button>
                                    <button onClick={this.changeState3} className="O_button" style={{backgroundColor: this.state.section === 3 ? "white" : null, color: this.state.section === 3 ? "black" : null }}>Produits Dérivés</button>
                                </div>
                            }
                        </div>
                    </ScrollSpy>
                </ScrollAnimation>
            </div>
        )
    }
}

export default Offres