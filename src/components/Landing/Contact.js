import React from 'react'
import { ScrollSpy } from 'organism-react-scroll-nav'
import ADE from './../../img/Portrait/V-ade.jpg'
import SAU from './../../img/Portrait/V-Sau.jpg'
import JUL from './../../img/Portrait/V-jules.JPG'
import JEA from './../../img/Portrait/V-jeanne3.jpg'
import CLE from './../../img/Portrait/V-clem.jpg'
import YAN from './../../img/Portrait/V-yanis.JPG'
import INSTA from './../../img/forwebsite/insta.png'
import MAIL from './../../img/forwebsite/mail.png'
import FB from './../../img/forwebsite/facebook.png'

const Contact = (props) => {
    return(
        <div className="Dark_section">
            <ScrollSpy id="t3">
            <div style={{ opacity: "0", width: "100%", marginTop: "-100px", height: "100px", border: "solid 1px red"}}></div>
                <h1 className="title_gif">TEAM</h1>
                <div className= "wrapper">
                    <div className="C_row">
                        <div className='C_column'>
                            <div className="C_infos">
                                <img className="contact_img" alt="" src={ADE} ></img>
                                <h1 className="C_infos_title">Adélaïde Vaillant</h1>
                                <p style={{fonSize: "1.2 vw", marginTop: "20%", textAlign: "center"}}>adelaide@visionae.fr</p>
                                <h3 style={{marginTop: "35%"}}>Co-founder CEO</h3>
                            </div>
                        </div>
                        <div className='C_column'>
                            <div className="C_infos">
                                <img className="contact_img" alt="" src={SAU} ></img>
                                <h1 className="C_infos_title">Sauvanne Folivi</h1>
                                <p style={{fonSize: "1.2 vw", marginTop: "20%", textAlign: "center"}}>sauvanne@visionae.fr</p>
                                <h3 style={{marginTop: "35%"}}>Co-founder CPO</h3>
                            </div>
                        </div>
                        <div className='C_column'>
                            <div className="C_infos">
                                <img className="contact_img" alt="" src={JUL} ></img>
                                <h1 className="C_infos_title">Jules Lasne</h1>
                                <p style={{fonSize: "1.2 vw", marginTop: "20%", textAlign: "center"}}>jules@visionae.fr</p>
                                <h3 style={{marginTop: "35%"}}>Co-Founder CTO</h3>
                            </div>
                        </div>
                        <div className='C_column'>
                            <div className="C_infos">
                                <img className="contact_img" alt="" src={JEA}></img>
                                <h1 className="C_infos_title">Jeanne Vitoux</h1>
                                <p style={{fonSize: "1.2 vw", marginTop: "20%", textAlign: "center"}}>jeanne@visionae.fr</p>
                                <h3 style={{marginTop: "35%"}}>Creative Director</h3>
                            </div>
                        </div>
                        <div className='C_column'>
                            <div className="C_infos">
                                <img className="contact_img" alt="" src={CLE} ></img>
                                <h1 className="C_infos_title">Clement Fauvelle</h1>
                                <p style={{fonSize: "1.2 vw", marginTop: "20%", textAlign: "center"}}>clement@visionae.fr</p>
                                <h3 style={{marginTop: "35%"}}>Creative Developer</h3>
                            </div>
                        </div>
                        <div className='C_column'>
                            <div className="C_infos">
                                <img className="contact_img" alt="" src={YAN} ></img>
                                <h1 className="C_infos_title">Yanis Ismail</h1>
                                <p style={{fonSize: "1.6 vw", marginTop: "20%", textAlign: "center"}}>yanis@visionae.fr</p>
                                <h3 style={{marginTop: "35%"}}>Creative Developer</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Contact_us">
                    <h1 style={{fontSize: "2.2em", color: "white"}}>NOUS CONTACTER</h1>
                        <table className="C_table">
                            <tbody>
                                <tr>
                                    <td style={{ width: "18%"}}>
                                        <a href="https://www.instagram.com/vision.ae/" target="_blank" rel="noopener noreferrer"><img src={INSTA} alt=""></img></a>
                                    </td>
                                    <td style={{width: "10%"}}></td>
                                    <td style={{ width: "22%"}}>
                                        <a href="mailto:equipe.visionae@gmail.com" rel="noopener noreferrer"><img src={MAIL} alt=""></img></a>
                                    </td>
                                    <td style={{width: "10%"}}></td>
                                    <td style={{ width: "20%"}}>
                                        <a href="https://www.facebook.com/visionaevisionae/?ref=br_rs" target="_blank" rel="noopener noreferrer"><img  src={FB} alt=""></img></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    <h1 style={{fontSize: "2em", marginTop: "20px", color: "white"}}>75004 PARIS</h1>
                </div>
            </ScrollSpy>
        </div>
    )
}
export default Contact