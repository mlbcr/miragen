import { useState } from "react";
import { useNavigate } from "react-router";
import "./HomePage.css";

function HomePage() {
    const navigate = useNavigate();

    const [resumeFile, setResumeFile] = useState(null);
    const [jobDescription, setJobDescription] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (!resumeFile || !jobDescription.trim()) {
            alert("Envie seu currículo e informe a descrição da vaga.");
            return;
        }

        navigate("/analysis", {
            state: {
                resumeFile,
                jobDescription
            }
        });
    }

    return (
        <main className="home-page">
            <section className="hero">
                <div className="hero-content">
                    <span className="hero-tag">
                        Análise inteligente de currículo
                    </span>

                    <h1>
                        Descubra o quanto seu currículo combina com a vaga
                    </h1>

                    <p>
                        Envie seu currículo e a descrição da vaga para analisar
                        suas habilidades, experiências e compatibilidade com a
                        oportunidade.
                    </p>
                </div>
            </section>

            <section className="upload-section">
                <div className="upload-card">

                    <div className="card-header">
                        <h2>Analise seu currículo</h2>

                        <p>
                            Preencha as informações abaixo para começar.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit}>

                        <div className="form-group">
                            <label htmlFor="resume">
                                Seu currículo
                            </label>

                            <label
                                htmlFor="resume"
                                className="file-upload"
                            >
                                <span className="upload-icon">
                                    ↑
                                </span>

                                <div>
                                    <strong>
                                        {resumeFile
                                            ? resumeFile.name
                                            : "Clique para enviar seu currículo"
                                        }
                                    </strong>

                                    {!resumeFile && (
                                        <p>
                                            PDF ou DOCX
                                        </p>
                                    )}
                                </div>
                            </label>

                            <input
                                id="resume"
                                type="file"
                                accept=".pdf,.doc,.docx"
                                onChange={(e) =>
                                    setResumeFile(e.target.files[0])
                                }
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="jobDescription">
                                Descrição da vaga
                            </label>

                            <textarea
                                id="jobDescription"
                                placeholder="Cole aqui a descrição da vaga que deseja analisar..."
                                value={jobDescription}
                                onChange={(e) =>
                                    setJobDescription(e.target.value)
                                }
                            />
                        </div>

                        <button
                            type="submit"
                            className="analyze-button"
                        >
                            Analisar currículo →
                        </button>

                    </form>
                </div>
            </section>

            <section className="how-it-works">
                <h2>Como funciona?</h2>

                <div className="steps">

                    <div className="info-step">
                        <span>1</span>

                        <h3>Envie seu currículo</h3>

                        <p>
                            Faça upload do seu currículo.
                        </p>
                    </div>

                    <div className="info-step">
                        <span>2</span>

                        <h3>Adicione a vaga</h3>

                        <p>
                            Cole a descrição da oportunidade desejada.
                        </p>
                    </div>

                    <div className="info-step">
                        <span>3</span>

                        <h3>Veja o resultado</h3>

                        <p>
                            Descubra sua compatibilidade com a vaga.
                        </p>
                    </div>

                </div>
            </section>
        </main>
    );


}

export default HomePage;
