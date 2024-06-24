import { useState } from "react";
import Header from "../../Componente/Header";;
import "./contato.css";
import { toast } from "react-toastify";
import Footer from "../../Componente/Footer";

function Contato() {
  const [nome, setNome] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [texto, setTexto] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      nome,
      empresa,
      texto,
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          destinatario: 'sabrinams9.ss@gmail.com'
        }),
      });

      if (response.ok) {
        setNome("");
        setEmpresa("");
        setTexto("");
        toast.success("Enviado com Sucesso!");
      } else {
        toast.error("Erro ao enviar o e-mail. Por favor, tente novamente mais tarde.");
      }
    } catch (error) {
      console.error("Erro ao enviar o e-mail:", error);
      toast.error("Erro ao enviar o e-mail. Por favor, tente novamente mais tarde.");
    }
  }
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const formData = {
  //     nome,
  //     empresa,
  //     texto,
  //   };
    
  //   const mensagem = `Nome: ${formData.nome}%0AEmpresa: ${formData.empresa}%0ATexto: ${formData.texto}`;
  //   const numeroWhatsApp = "553332714427";
  //   const linkWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensagem}`;

  //   window.open(linkWhatsApp, "_blank");

  //   setNome("");
  //   setEmpresa("");
  //   setTexto("");

  //   toast.success("Enviado com Sucesso!");
  // }

  return (
    <div>
      <Header className="header" />
      <div>
      <form onSubmit={handleSubmit}>
        <section className="container"> 
          <div className="form-container">
            <h2>Contato</h2>
            <p>Envie pra gente um contato para que possamos agendar um horario para conversarmos a respeito!</p>
            <div className="input-container">
              <input
                type="text"
                placeholder="Seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              <input
                type="text"
                placeholder="Nome da empresa"
                value={empresa}
                onChange={(e) => setEmpresa(e.target.value)}
              />
              <input
                type="text"
                placeholder="Sua mensagem"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
              />
              <button type="submit" className="btn-contato">Enviar</button>
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