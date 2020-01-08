import React from 'react'
import { ScrollSpy } from 'organism-react-scroll-nav'
import Matrice from './../../img/Partenaire/matrice.png'
import Icart from './../../img/Partenaire/icart.png'
import Fontenay from './../../img/Partenaire/fontenay.png'
import Region from './../../img/Partenaire/region.gif'
import France3 from './../../img/Partenaire/france3.png'
import QD from './../../img/Partenaire/42.png'
import Artline from './../../img/Partenaire/artline-logo.png'
import Andy from './../../img/Partenaire/logo_visu.png'
import Clos from './../../img/Partenaire/Clos.png'
import Fluctuart from './../../img/Partenaire/fluctuart.png'
import Museo from './../../img/Partenaire/museopic.png'


const Partenaires = () => {
    return(
        <div className="Dark_section" style={{backgroundColor: "black"}}>
            <ScrollSpy id="t4">
            <div style={{ opacity: "0", width: "100%", marginTop: "-100px", height: "100px", border: "solid 1px red"}}></div>
                <h1 className="title_gif">PARTENAIRES</h1>
                <div className= "wrapper">
                    <div className="P_row">
                        <div className='P_column'>
                            <a href="https://www.matrice.io" target="_blank" rel="noopener noreferrer"><img src={Matrice} alt=""></img></a>
                        </div>
                        <div className='P_column'>
                            <a href="https://www.icart.fr" target="_blank" rel="noopener noreferrer"><img src={Icart} alt=""></img></a>
                        </div>
                        <div className='P_column'>
                            <a href="http://www.abbayedefontenay.com" target="_blank" rel="noopener noreferrer"><img src={Fontenay} alt=""></img></a>
                        </div>
                        <div className='P_column'>
                            <a href="https://www.bourgognefranchecomte.fr" target="_blank" rel="noopener noreferrer"><img src={Region} alt=""></img></a>
                        </div>
                    </div>
                    <div className="P_row">
                        <div className='P_column'>
                            <a href="https://france3-regions.francetvinfo.fr/bourgogne-franche-comte/" target="_blank" rel="noopener noreferrer"><img src={France3} alt=""></img></a>
                        </div>
                        <div className='P_column'>
                            <a href="https://www.42.fr" target="_blank" rel="noopener noreferrer"><img src={QD} alt=""></img></a>
                        </div>
                        <div className='P_column'>
                        <a href="https://www.institutartline.com" target="_blank" rel="noopener noreferrer"><img src={Artline} alt=""></img></a>
                        </div>
                        <div className='P_column'>
                            <a href="https://www.handyamo.com" target="_blank" rel="noopener noreferrer"><img src={Andy} alt=""></img></a>
                        </div>
                    </div>
                    <div className="P_row">
                    <div className='P_column'>
                            <a href="http://www.closdevougeot.fr/fr/" target="_blank" rel="noopener noreferrer"><img src={Clos} alt=""></img></a>
                        </div>
                        <div className='P_column'>
                            <a href="https://fluctuart.fr/" target="_blank" rel="noopener noreferrer"><img src={Fluctuart} alt=""></img></a>
                        </div>
                        <div className='P_column'>
                            <a href="http://www.museopic.com/" target="_blank" rel="noopener noreferrer"><img src={Museo} alt=""></img></a>
                        </div>
                        <div className='P_column'></div>
                    </div>
                </div>
            </ScrollSpy>
        </div>
    )
}

export default Partenaires