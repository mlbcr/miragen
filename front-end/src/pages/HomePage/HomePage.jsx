import { useState } from "react";
import { useNavigate } from "react-router";
import "./HomePage.css";

function HomePage() {
    return (
        <div className="home-page">
            <section className="home-hero">
                <h1>Miragen</h1>

                <p className="home-subtitle">
                    Uma forma simples de entender o quanto seu currículo
                    está alinhado com uma oportunidade.
                </p>
            </section>

            <section className="home-section">
                <h2>O que é o Miragen?</h2>

                <p>
                    O Miragen é uma plataforma criada para ajudar candidatos
                    a analisarem a compatibilidade entre seus currículos e
                    vagas de emprego.
                </p>

                <p>
                    Através da análise das informações presentes no currículo
                    e dos requisitos descritos na vaga, a plataforma identifica
                    pontos de compatibilidade e apresenta informações que podem
                    ajudar o candidato a entender melhor o seu perfil em relação
                    à oportunidade.
                </p>
            </section>

            <section className="home-section">
                <h2>Como funciona?</h2>

                <div className="home-steps">
                    <div className="home-step">
                        <span>01</span>

                        <h3>Envie seu currículo</h3>

                        <p>
                            Faça o envio do seu currículo para que suas
                            informações possam ser analisadas.
                        </p>
                    </div>

                    <div className="home-step">
                        <span>02</span>

                        <h3>Informe a vaga</h3>

                        <p>
                            Adicione a descrição da oportunidade que deseja
                            comparar com o seu perfil.
                        </p>
                    </div>

                    <div className="home-step">
                        <span>03</span>

                        <h3>Veja sua análise</h3>

                        <p>
                            Receba uma análise da compatibilidade entre suas
                            experiências, habilidades e os requisitos da vaga.
                        </p>
                    </div>
                </div>
            </section>

            <section className="home-section home-final">
                <h2>Entenda melhor o seu perfil</h2>

                <p>
                    O objetivo do Miragen é tornar mais simples a análise entre
                    o perfil profissional de um candidato e as exigências de
                    uma oportunidade, ajudando você a identificar pontos fortes
                    e possíveis aspectos que podem ser desenvolvidos.
                </p>
            </section>
        </div>
    );
}

export default HomePage;
