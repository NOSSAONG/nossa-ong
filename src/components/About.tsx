export default function About () {
    return (
        <>
            <section id="about" className="container">
                
                <div className="about-text">
                    <h2 className="subtitle">Nosso Propósito</h2>
                    <p>A Nossa ONG, com sede em Juiz de Fora, MG, Brasil, é uma organização sem fins lucrativos dedicada a 
                        apoiar e fortalecer iniciativas sociais e culturais em favelas, aldeias indígenas, quilombolas e na 
                        preservação ambiental. Acreditamos no poder do empreendedorismo como catalisador para a transformação 
                        social, estimulando-o em nossas ações. Atuamos como ponte para acesso a iniciativas transformadoras 
                        e de impacto, comprometidos com princípios fundamentais de paz, igualdade, conscientização ambiental e
                        cooperação. Junte-se a nós na construção de um Brasil mais justo, sustentável e harmonioso.
                    </p>
                </div>

                <div className="row">
                    <div className="col about-mission">
                        <h3>Missão: </h3>
                        <p>Disseminar amor e paz em todas os lugares, promovendo uma sociedade mais inclusiva e igualitária nas oportunidades.</p>
                    </div>
                    <div className="col about-vision">
                        <h3>Visão: </h3>
                        <p>Reconhecer que, apesar das diferenças, somos todos iguais, buscando alcançar a equidade e transformar vidas ao 
                            longo de no mínimo 100 anos.</p>
                    </div>
                    <div className="col about-values">
                        <h3>Valores: </h3>
                        <p>Nosso trabalho é pautado por valores sólidos, incluindo ética, transparência e amor ao próximo. Acreditamos em 
                        agir sem esperar recompensas, buscando o bem-estar e a harmonia em tudo o que fazemos.</p>
                    </div> 
                </div>

                <div className="about-text">
                    <p>Entre para a nossa família! Seja para ajudar ou para ser ajudado, as nossas portas estão abertas para você!</p>
                    <div className="about-buttons">
                    <a href="https://forms.gle/6JcmZfQxzndtb8YL6" target="_blank" rel="noopener noreferrer">
                            <button className="btn-primary btn-lg"> Seja um Voluntário </button>
                        </a>
                        <a href="https://forms.gle/66jYKA8fyem9qby27" target="_blank" rel="noopener noreferrer">
                            <button className="btn-primary btn-lg"> Seja um Beneficiário </button>
                        </a>
                    </div>
                </div>

            </section>

        </>
    )
}