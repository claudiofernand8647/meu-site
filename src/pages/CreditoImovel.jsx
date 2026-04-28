import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function CreditoImovel() {
  return (
    <>
<Helmet>
  <title>
    Crédito com Garantia de Imóvel | Crédito Multi Bancos
  </title>

  <meta
    name="description"
    content="Crédito com garantia de imóvel com taxas competitivas, prazos longos e atendimento especializado. Simule em São Paulo ou online para todo Brasil."
  />

  <meta
    name="keywords"
    content="crédito com garantia de imóvel, home equity, empréstimo com garantia, São Paulo"
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
  color: "white",
  maxWidth: "850px",
  margin: "0 auto 20px"
}}>
            Crédito com Garantia de Imóvel com Taxas Baixas
            e Prazos Estendidos
          </h1>

          <p style={{
            fontSize: "20px",
            color: "#dbeafe",
            marginBottom: "30px"
          }}>
            Utilize seu imóvel como garantia e tenha acesso a
            crédito inteligente com condições diferenciadas.
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
            Vantagens do Crédito com Garantia
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: "20px"
          }}>

            <div style={{
              background: "white",
              padding: "25px",
              borderRadius: "12px"
            }}>
              ✔ Taxas menores que crédito comum
            </div>

            <div style={{
              background: "white",
              padding: "25px",
              borderRadius: "12px"
            }}>
              ✔ Valores mais altos disponíveis
            </div>

            <div style={{
              background: "white",
              padding: "25px",
              borderRadius: "12px"
            }}>
              ✔ Prazos longos para pagar
            </div>

            <div style={{
              background: "white",
              padding: "25px",
              borderRadius: "12px"
            }}>
              ✔ Atendimento consultivo especializado
            </div>

          </div>
        </div>
      </section>

      {/* AUTORIDADE */}
      <section style={{
        padding: "70px 20px"
      }}>
        <div style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center"
        }}>
          <h2 style={{
            fontSize: "30px",
            marginBottom: "20px"
          }}>
            Atendimento Seguro e Especializado
          </h2>

          <p style={{
            fontSize: "18px",
            lineHeight: "1.8"
          }}>
            Conte com atendimento profissional, experiência no setor
            financeiro e análise personalizada para encontrar a melhor solução.
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

export default CreditoImovel;