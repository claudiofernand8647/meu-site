import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Seguro() {
  return (
    <>
      <Helmet>
        <title>Seguros | Crédito Multi Bancos</title>

        <meta
          name="description"
          content="Seguro de vida, auto, residencial e empresarial com atendimento consultivo e proteção sob medida."
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
              PROTEÇÃO PARA O QUE MAIS TE IMPORTA: SUA FAMÍLIA E PATRIMÔNIO
            </p>

            <h1 style={{
              fontSize: "54px",
              lineHeight: "1.15",
              margin: "20px 0",
              color: "white",
              textShadow: "0 4px 10px rgba(0,0,0,0.18)"
            }}>
              Seguros Sob Medida
              <br />
              Para Você e Seu Patrimônio
            </h1>

            <p style={{
              fontSize: "24px",
              color: "#dbeafe",
              marginBottom: "35px"
            }}>
              Vida, auto, residencial e empresarial com soluções flexíveis, atendimento personalizado e cobertura abrangente.
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
              Garanta Seu Futuro
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
                "🛡️ Proteção personalizada e planos que atendem a sua necessidade",
                "🚗 Seguro auto com cobertura completa contra colisão, roubo e terceiros. Além de assistência 24 horas",
                "🏠 Com o Seguro Residencial, proteja seu patrimônio contra danos elétricos, incêndio e furtos",
                "💼 Com o Seguro empresarial, garanta a continuidade do seu negócio com cobertura personalizada para o seu setor"
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
              "1️⃣ Conte sua necessidade",
              "2️⃣ Análise ideal",
              "3️⃣ Cotação personalizada",
              "4️⃣ Contratação segura"
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
            Proteja Seu Futuro Hoje
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
            Garanta Seu Futuro
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

export default Seguro;