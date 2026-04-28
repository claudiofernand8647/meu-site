import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function CreditoImovel() {
  return (
    <>
      <Helmet>
        <title>Crédito com Garantia de Imóvel | Crédito Multi Bancos</title>

        <meta
          name="description"
          content="Crédito com garantia de imóvel com taxas menores, valores altos e prazos longos. Atendimento consultivo e simulação rápida."
        />
      </Helmet>

      <div style={{ fontFamily: "Arial, sans-serif" }}>

        {/* HERO */}
        <section style={{
          background: "linear-gradient(135deg,#0f172a,#1e3a8a)",
          color: "white",
          padding: "110px 20px",
          textAlign: "center"
        }}>
          <div style={{ maxWidth: "950px", margin: "0 auto" }}>

            <p style={{
              color: "#93c5fd",
              fontWeight: "bold",
              letterSpacing: "1px"
            }}>
              TRANSFORME SEU PATRIMÔNIO EM OPORTUNIDADE
            </p>

            <h1 style={{
              fontSize: "52px",
              color:"white",
textShadow:"0 4px 10px rgba(0,0,0,0.18)",
              lineHeight: "1.15",
              margin: "18px 0"
            }}>
              Crédito com Garantia de Imóvel com Taxas Baixas e Prazos Estendidos
              <br />
            </h1>

            <p style={{
              fontSize: "22px",
              color: "#dbeafe",
              marginBottom: "35px"
            }}>
              Utilize seu imóvel como garantia e tenha acesso a crédito inteligente com condições diferenciadas
            </p>

            <a
              href="https://wa.me/5511933739876"
              target="_blank"
              style={{
                background: "#25D366",
                color: "white",
                padding: "18px 34px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "20px"
              }}
            >
              Falar com um Especialista
            </a>

          </div>
        </section>

        {/* BENEFÍCIOS */}
        <section style={{
          padding: "90px 20px",
          background: "#f8fafc"
        }}>
          <div style={{
            maxWidth: "1150px",
            margin: "0 auto"
          }}>

            <h2 style={{
              textAlign: "center",
              fontSize: "40px",
              marginBottom: "40px"
            }}>
              Vantagens
            </h2>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
              gap: "25px"
            }}>

              {[
                "💰 Juros reduzidos e condições vantajosas",
                "🏠 Aceitamos imóveis residenciais, comerciais ou terrenos",
                "📈 Alto limite de crédito disponível",
                "📅 Prazos longos que não sufocam o seu orçamento"
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    background: "white",
                    padding: "28px",
                    borderRadius: "18px",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
                    fontWeight: "bold",
                    fontSize: "20px",
                    textAlign: "center"
                  }}
                >
                  {item}
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* PROCESSO */}
        <section style={{
          padding: "90px 20px",
          textAlign: "center"
        }}>
          <h2 style={{
            fontSize: "40px",
            marginBottom: "40px"
          }}>
            Como Funciona
          </h2>

          <div style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "25px"
          }}>

            {[
              "1️⃣ Envie seus dados",
              "2️⃣ Análise personalizada",
              "3️⃣ Proposta ideal",
              "4️⃣ Liberação após aprovação"
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: "#eff6ff",
                  padding: "28px",
                  borderRadius: "18px",
                  fontWeight: "bold"
                }}
              >
                {item}
              </div>
            ))}

          </div>
        </section>

        {/* CTA FINAL */}
        <section style={{
          background: "#0f172a",
          color: "white",
          padding: "80px 20px",
          textAlign: "center"
        }}>
          <h2 style={{
            fontSize: "42px",
            color:"white",
textShadow:"0 4px 10px rgba(0,0,0,0.18)",
            marginBottom: "20px"
          }}>
            Descubra Quanto Pode Liberar
          </h2>

          <a
            href="https://wa.me/5511933739876"
            target="_blank"
            style={{
              background: "#25D366",
              color: "white",
              padding: "18px 34px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "20px"
            }}
          >
            Falar com um Especialista
          </a>

          <div style={{ marginTop: "35px" }}>
            <Link to="/" style={{ color: "#93c5fd" }}>
              ← Voltar para Home
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}

export default CreditoImovel;