export default function Projects () {
    return(
        <>
            <div id="projects-title">
                <h2 className="subtitle">Nossos Projetos</h2>
            </div>

            <section id="projects">
                <div className="projects-square" id="project-1">
                    <h3>Favelas</h3>
                    <p>Nas favelas queremos iniciar o Programação na Quebrada, ensinando jovens de periferia o primeiro contato com a lógica de programação
                        de forma gamificada.
                    </p>
                </div>
                <div className="projects-square" id="project-2">
                    <h3>Indígenas</h3>
                    <p>Nesta frente de atuação, o nosso foco está em Aguá na Nomanawa, uma operação de busca de recursos para solução e 
                        potabilização da água do povo Noke Koî.</p>
                </div>
                <div className="projects-square" id="project-3">
                    <h3>Comunidade Quilombola</h3>
                    <p>Cozinha escola - Colônia do Paiol, empreendedorismo e profissionalização de mulheres quilombolas.</p>
                </div>
                <div className="projects-square" id="project-4">
                    <h3>Ribeirinhos</h3>
                    <p>Observatório permanente de águas e mineração para a utilização de dados e evidências na mitigação da poluição por mares, 
                        rios e mineração.</p>
                </div>
            </section>
        </>
    )
}