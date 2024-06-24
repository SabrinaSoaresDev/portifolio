import React, { useState } from "react";
import Header from "../../Componente/Header";
import Footer from "../../Componente/Footer";
import { toast } from "react-toastify";
import "./contato.css";

function Contato() {
  const [nome, setNome] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [texto, setTexto] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = { nome, empresa, texto };

    try {
      const response = await fetch('https://formspree.io/f/xblrrawk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setNome("");
        setEmpresa("");
        setTexto("");
        toast.success("Enviado com Sucesso!");
      } else {
        toast.error(
          "Erro ao enviar o e-mail. Por favor, tente novamente mais tarde."
        );
      }
    } catch (error) {
      console.error("Erro ao enviar o e-mail:", error);
      toast.error(
        "Erro ao enviar o e-mail. Por favor, tente novamente mais tarde."
      );
    }
  };

  return (
    <div>
      <Header className="header" />
      <div>
        <form onSubmit={handleSubmit}>
          <section className="container">
            <div className="form-container">
              <h2>Contato</h2>
              <p>
                Envie pra gente um contato para que possamos agendar um horário
                para conversarmos a respeito!
              </p>
              <div className="input-container">
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Nome da empresa"
                  value={empresa}
                  onChange={(e) => setEmpresa(e.target.value)}
                />
                <textarea
                  placeholder="Sua mensagem"
                  value={texto}
                  onChange={(e) => setTexto(e.target.value)}
                  required
                />
                <button type="submit" className="btn-contato">
                  Enviar
                </button>
              </div>
            </div>
          </section>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contato;
