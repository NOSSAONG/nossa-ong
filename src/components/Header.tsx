import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"

export default function Header () {

    const [menuOnMobileDisplay, setMenuOnMobileDisplay] = useState('menu-invisible')
    const [donateBoxIsVisible, setDonateBoxIsVisible] = useState(false)

    const toggleMenu = () => {
        if(menuOnMobileDisplay === 'menu-invisible'){
            setMenuOnMobileDisplay('menu-visible')
        } else {
            setMenuOnMobileDisplay('menu-invisible')
        }
    }

    const toggleDonateBox = () => {
        if(donateBoxIsVisible){
            setDonateBoxIsVisible(false)
        } else {
            setDonateBoxIsVisible(true)
        }
    }

    return (
        <header>

            <button className="toggle-btn" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
            </button>

            <a href="#" aria-label="Home">
                <img src="./icon2.png" alt="Logo Nossa Ong" className="logo"/>
            </a>
            
            <div className="menu">
                <ul className={`nav ${menuOnMobileDisplay}`}>
                    <li><a href="#home">Nossa Home</a></li>
                    <li><a href="#about">Nosso Propósito</a></li>
                    <li><a href="#projects-title">Nossos Projetos</a></li>
                    <li><a href="#contact">Nosso Contato</a></li>
                </ul>

                <button className="btn-light" onClick={toggleDonateBox}>Doar</button>
            </div>

            {donateBoxIsVisible ? 
                <div id="donate-container">
                    <div className="donate-box">
                        <div className="donate-header">
                            <h2>Nos ajude com uma doação!</h2>
                            <button className="x-button" onClick={toggleDonateBox}><FontAwesomeIcon icon={faCircleXmark} /></button>
                        </div>
                        <div className="donate-content">
                            <img src="./pix.jpeg"/>
                            <p>Para transferir via Pix use o QR code ou utilize a chave: (32) 93300-3063</p>
                        </div>
                    </div>
                </div>
                : null
            }

        </header>
    )
}