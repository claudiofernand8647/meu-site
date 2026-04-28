import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Seguro() {
  return (
    <>
<Helmet>
  <title>
    Seguros | Crédito Multi Bancos
  </title>

  <meta
    name="description"
    content="Seguro de vida, residencial, auto e empresarial com atendimento consultivo e soluções personalizadas."
  />
  </Helmet>
    <div style={{ fontFamily: "Arial, sans-serif", color: "#1a1a1a" }}>

      {/* HERO */}
      <section style={{
        background: "linear-gradient(135deg,#0f172a,#1e3a8a)",
        color: "white",
        padding: "80px 20px",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h1 style={{
            fontSize: "42px",
            lineHeight: "1.2",
            marginBottom: "20px",
            color: "white"
          }}>
            Seguros para Proteger seu Patrimônio e sua Família
          </h1>

          <p style={{
            fontSize: "20px",
            color: "#dbeafe",
            marginBottom: "30px"
          }}>
            Soluções personalizadas para proteger o que realmente importa.
          </p>

          <a
            href="https://wa.me/5511933739876"
            target="_blank"
            style={{
              background: "#25D366",
              color: "white",
              padding: "16px 28px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Solicitar Cotação
          </a>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section style={{
        padding: "70px 20px",
        background: "#f8fafc"
      }}>
        <div style={{
          maxWidth: "1100px",
          margin: "0 auto"
        }}>
          <h2 style={{
            textAlign: "center",
            fontSize: "32px",
            marginBottom: "40px"
          }}>
            Tipos de Seguro
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: "20px"
          }}>

            <div style={{ background: "white", padding: "25px", borderRadius: "12px" }}>
              ✔ Seguro de Vida
            </div>

            <div style={{ background: "white", padding: "25px", borderRadius: "12px" }}>
              ✔ Seguro Residencial
            </div>

            <div style={{ background: "white", padding: "25px", borderRadius: "12px" }}>
              ✔ Seguro Auto
            </div>

            <div style={{ background: "white", padding: "25px", borderRadius: "12px" }}>
              ✔ Seguro Empresarial
            </div>

          </div>
        </div>
      </section>

      {/* CONFIANÇA */}
      <section style={{ padding: "70px 20px" }}>
        <div style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center"
        }}>
          <h2 style={{
            fontSize: "30px",
            marginBottom: "20px"
          }}>
            Proteção com Atendimento Especializado
          </h2>

          <p style={{
            fontSize: "18px",
            lineHeight: "1.8"
          }}>
            Avaliação personalizada para indicar coberturas adequadas ao seu perfil e momento de vida.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{
        background: "#1e3a8a",
        color: "white",
        padding: "70px 20px",
        textAlign: "center"
      }}>
        <h2 style={{
          fontSize: "34px",
          marginBottom: "20px"
        }}>
          Solicite sua cotação agora
        </h2>

        <a
          href="https://wa.me/5511933739876"
          target="_blank"
          style={{
            background: "#25D366",
            color: "white",
            padding: "16px 28px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          Falar no WhatsApp
        </a>
      </section>

    </div>
    </>
  );
}

export default Seguro;