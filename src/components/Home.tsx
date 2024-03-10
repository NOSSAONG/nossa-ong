import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'

export default function Home () {
    return (
        <section id="home">
            <div className="container filter">
                <div className="content">
                    <h1>NOSSA ONG</h1>
                    <h2>Construindo um mundo melhor.</h2>
                    <a href="#about" aria-label="about"><FontAwesomeIcon icon={faAnglesDown} id='arrow-down'/></a>
                </div>
            </div>
        </section>
    )
}