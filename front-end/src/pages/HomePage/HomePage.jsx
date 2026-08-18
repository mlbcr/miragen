import "./HomePage.css";

function HomePage() {
    return (
        <main className="home-page">

            <section className="home-hero">
                <div className="hero-content">
                    <span className="hero-badge">
                        Análise inteligente de currículos
                    </span>

                    <h1>
                        Entenda como o seu perfil se conecta com as oportunidades
                    </h1>

                    <p>
                        O Miragen analisa seu currículo e compara suas
                        experiências e habilidades com os requisitos de uma vaga,
                        ajudando você a compreender melhor sua compatibilidade
                        com cada oportunidade.
                    </p>
                </div>

                <div className="hero-visual">
                    <div className="comparison-card">
                        <div className="comparison-header">
                            <span>CURRÍCULO</span>
                            <span>VAGA</span>
                        </div>

                        <div className="comparison-content">
                            <div className="comparison-column">
                                <div className="comparison-line"></div>
                                <div className="comparison-line"></div>
                                <div className="comparison-line short"></div>
                                <div className="comparison-line"></div>
                            </div>

                            <div className="comparison-divider"></div>

                            <div className="comparison-column">
                                <div className="comparison-line"></div>
                                <div className="comparison-line short"></div>
                                <div className="comparison-line"></div>
                                <div className="comparison-line short"></div>
                            </div>
                        </div>

                        <div className="analysis-result">
                            <span>Compatibilidade analisada</span>
                            <div className="progress-bar">
                                <div className="progress"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="about-section">

                <span className="section-label">
                    SOBRE A PLATAFORMA
                </span>

                <h2>
                    Uma nova forma de analisar seu currículo
                </h2>

                <p>
                    Encontrar uma vaga pode ser apenas o primeiro passo. Muitas
                    vezes, é difícil entender exatamente quais requisitos são
                    mais importantes e como suas experiências se relacionam com
                    o que a empresa procura.
                </p>

                <p>
                    O Miragen foi criado para tornar essa comparação mais clara.
                    A plataforma analisa as informações presentes no currículo e
                    na descrição da vaga para apresentar uma visão sobre a
                    compatibilidade entre o perfil do candidato e a oportunidade.
                </p>

            </section>


            <section className="process-section">

                <div className="process-header">
                    <div>
                        <span className="section-label">
                            COMO FUNCIONA
                        </span>

                        <h2>
                            Simples, rápido e direto
                        </h2>
                    </div>

                    <p>
                        Em poucos passos, você pode entender melhor como seu
                        perfil se relaciona com uma oportunidade.
                    </p>
                </div>


                <div className="process-list">

                    <div className="process-item">
                        <span className="process-number">01</span>

                        <div>
                            <h3>Envie seu currículo</h3>

                            <p>
                                Adicione o seu currículo para que suas
                                informações profissionais possam ser analisadas.
                            </p>
                        </div>
                    </div>


                    <div className="process-item">
                        <span className="process-number">02</span>

                        <div>
                            <h3>Informe a oportunidade</h3>

                            <p>
                                Adicione a descrição da vaga e os requisitos
                                que deseja comparar com o seu perfil.
                            </p>
                        </div>
                    </div>


                    <div className="process-item">
                        <span className="process-number">03</span>

                        <div>
                            <h3>Receba sua análise</h3>

                            <p>
                                Visualize informações sobre a compatibilidade
                                entre suas experiências, habilidades e os
                                requisitos da vaga.
                            </p>
                        </div>
                    </div>

                </div>

            </section>


            <section className="home-highlight">

                <div>
                    <span className="section-label">
                        ANÁLISE PERSONALIZADA
                    </span>

                    <h2>
                        Conheça melhor o seu perfil profissional
                    </h2>

                    <p>
                        O Miragen não busca apenas indicar uma compatibilidade.
                        A proposta é ajudar você a compreender como suas
                        experiências e habilidades se relacionam com cada
                        oportunidade.
                    </p>
                </div>

            </section>

        </main>
    );
}

export default HomePage;