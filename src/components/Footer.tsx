import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <footer id="contact" className="container">
            <div className="row">

                <div className="col">

                    <h2 className="subtitle">Nosso Contato</h2>
                    <p>Envie sua mensagem no formulário abaixo:</p>

                    <form action="https://formsubmit.co/nossaong.br@gmail.com" method="POST">
                        <input type="text" name="name" id="name" placeholder="Nome: " required/>
                        <input type="email" name="email" id="email" placeholder="E-mail: " required/>
                        <textarea id="message" name="message" rows={2} placeholder="Mensagem" required/>
                        <button type="submit" className="btn-light-outline">Enviar</button>
                    </form>

                </div>

                <div className="col">
                    <img src="./icon2.png" alt="Logo Nossa Ong" className="logo"/>
                    <h3>Nossas Redes Sociais: <a href="" target="_blank" rel="noopener noreferrer" className='icon'><FontAwesomeIcon icon={faInstagram} /></a></h3>
                    <p>Créditos de imagem: Giulianne Martins / @origemterrena </p>
                    <a href="https://fernandocarvalhodev.com" target="_blank" rel="noopener noreferrer" id='credits'>
                        Desenvolvido voluntariamente por Fernando Carvalho
                    </a>
                </div>

            </div>
        </footer>
    )
}