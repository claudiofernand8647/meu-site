import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function EmprestimoConsignado() {
  return (
    <>
<Helmet>
  <title>
    Empréstimo Consignado | Crédito Multi Bancos
  </title>

  <meta
    name="description"
    content="Empréstimo consignado para aposentados, pensionistas e servidores com atendimento consultivo e análise rápida."
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
            Empréstimo Consignado com Taxas Competitivas
          </h1>

          <p style={{
            fontSize: "20px",
            color: "#dbeafe",
            marginBottom: "30px"
          }}>
            Soluções para aposentados, pensionistas e servidores, com análise rápida e atendimento especializado.
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
            Simular no WhatsApp
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
            Vantagens do Consignado
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: "20px"
          }}>

            <div style={{ background: "white", padding: "25px", borderRadius: "12px" }}>
              ✔ Taxas geralmente menores que crédito pessoal
            </div>

            <div style={{ background: "white", padding: "25px", borderRadius: "12px" }}>
              ✔ Parcelas descontadas em folha
            </div>

            <div style={{ background: "white", padding: "25px", borderRadius: "12px" }}>
              ✔ Processo simples e ágil
            </div>

            <div style={{ background: "white", padding: "25px", borderRadius: "12px" }}>
              ✔ Atendimento consultivo para encontrar a melhor opção
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
            Atendimento Seguro e Transparente
          </h2>

          <p style={{
            fontSize: "18px",
            lineHeight: "1.8"
          }}>
            Conte com atendimento profissional e análise personalizada para buscar a melhor solução consignada para seu perfil.
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
          Solicite sua simulação agora
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

export default EmprestimoConsignado;