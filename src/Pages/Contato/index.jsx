import React, { useState } from "react";
import Header from "../../Componente/Header";
import Footer from "../../Componente/Footer";
import { toast } from "react-toastify";
import "./contato.css";

function Contato() {
  const [nome, setNome] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [texto, setTexto] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Crie a mensagem a ser enviada pelo WhatsApp
    const mensagem = `*Contato*%0A%0ANome: ${nome}%0AEmpresa: ${empresa}%0AMensagem: ${texto}`;
    // Número de telefone do WhatsApp (incluindo o código do país, sem o +)
    const telefone = "5533998036871"; // Substitua pelo número de telefone desejado

    // URL do WhatsApp com a mensagem pré-preenchida
    const url = `https://wa.me/${telefone}?text=${mensagem}`;

    // Redireciona para o WhatsApp
    window.location.href = url;

    // Limpa o formulário e exibe a notificação
    setNome("");
    setEmpresa("");
    setTexto("");
    toast.success("Mensagem enviada com sucesso!");
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
                Envie um contato para que possamos agendar um horário
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
