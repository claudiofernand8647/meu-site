import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Consorcio() {
  return (
    <>
      <Helmet>
        <title>Consórcio | Crédito Multi Bancos</title>

        <meta
          name="description"
          content="Consórcio para imóveis, veículos e patrimônio com parcelas planejadas e sem juros."
        />
      </Helmet>

      <div style={{ fontFamily: "Arial, sans-serif" }}>

        {/* HERO */}
        <section style={{
          background: "linear-gradient(135deg,#0f172a,#1e3a8a)",
          color: "white",
          padding: "110px 20px" ,
          textAlign: "center"
        }}>
          <div style={{ maxWidth: "980px", margin: "0 auto" }}>

            <p style={{
              color: "#93c5fd",
              fontWeight: "bold",
              letterSpacing: "1px"
            }}>
              CONSTRUA SEU PATRIMÔNIO COM INTELIGÊNCIA
            </p>

            <h1 style={{
              fontSize: "54px",
              lineHeight: "1.15",
              margin: "20px 0",
              color: "white",
              textShadow: "0 4px 10px rgba(0,0,0,0.18)"
            }}>
              Consórcio Inteligente
              <br />
              Sem Juros e Planejado
            </h1>

            <p style={{
              fontSize: "24px",
              color: "#dbeafe",
              marginBottom: "35px"
            }}>
              Tenha o poder de compra à vista com parcelas que cabem no seu bolso.
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
              Montar Meu Plano
            </a>

          </div>
        </section>

        {/* BENEFÍCIOS */}
        <section style={{
          padding: "80px 20px",
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
                "💸 Fuja das taxas abusivas do financiamento",
                "📅 Planeje suas conquistas sem sufoco no orçamento",
                "🏠 Use para imóvel, veículos e outros projetos",
                "📈 Contrua seu patrimônio de forma segura e eficiente"
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    background: "white",
                    padding: "30px",
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
          padding: "80px 20px",
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
              "1️⃣ Escolha objetivo",
              "2️⃣ Simulação ideal",
              "3️⃣ Entrada no grupo",
              "4️⃣ Contemplação e uso"
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
            Planeje Seu Próximo Patrimônio
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
            Montar Meu Plano
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

export default Consorcio;