import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import CreditoImovel from "./pages/CreditoImovel.jsx";
import FinanciamentoImobiliario from "./pages/FinanciamentoImobiliario.jsx";
import EmprestimoConsignado from "./pages/EmprestimoConsignado.jsx";
import Consorcio from "./pages/Consorcio.jsx";
import Seguro from "./pages/Seguro.jsx";

function Home() {
  return (
    <>
  <Helmet>
  <title>
    Crédito Multi Bancos | Consignado, FGTS, Financiamento e Home Equity
  </title>

  <meta
    name="description"
    content="Especialistas em empréstimo consignado, FGTS, financiamento imobiliário e crédito com garantia de imóvel. Simule pelo WhatsApp."
  />
</Helmet>

  <div style={{ fontFamily: "Arial, sans-serif" }}>

    {/* HERO */}
    <section style={{
      background: "linear-gradient(135deg,#0f172a,#1e3a8a)",
      color: "white",
      padding: "90px 20px",
      textAlign: "center"
    }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>

        <p style={{
          color: "#93c5fd",
          fontWeight: "bold",
          letterSpacing: "1px"
        }}>
          ESPECIALISTA EM SOLUÇÕES FINANCEIRAS
        </p>

        <h1 style={{
          fontSize: "52px",
          color:"white", 

textShadow:"0 4px 10px rgba(0,0,0,0.18)", 
          lineHeight: "1.15",
          margin: "20px 0"
        }}>
          Crédito Inteligente com Segurança, Taxas Competitivas e Atendimento Consultivo
          <br />
        </h1>

        <p style={{
          fontSize: "22px",
          maxWidth: "750px",
          margin: "0 auto 35px",
          color: "#dbeafe"
        }}>
          Crédito com garantia de imóvel, financiamento, consignado, consórcio e seguros com atendimento especializado.
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
            fontSize: "20px",
            display: "inline-block"
          }}
        >
          Simular no WhatsApp
        </a>

      </div>
    </section>

    {/* PROVAS */}
    <section style={{
      background: "#0b1120",
      color: "white",
      padding: "35px 20px"
    }}>
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
        textAlign: "center",
        gap: "20px"
      }}>
        <div><h3>+500</h3><p>Clientes atendidos</p></div>
        <div><h3>+10 anos</h3><p>Experiência</p></div>
        <div><h3>CEA / CFP</h3><p>Certificações</p></div>
        <div><h3>100%</h3><p>Atendimento consultivo</p></div>
      </div>
    </section>

    {/* SERVIÇOS */}
<section style={{
  padding: "80px 20px",
  background: "#f8fafc"
}}>
  <div style={{
    maxWidth: "1200px",
    margin: "0 auto"
  }}>

    <h2 style={{
      textAlign: "center",
      fontSize: "40px",
      marginBottom: "15px",
      color: "#0f172a"
    }}>
      Nossos Serviços
    </h2>

    <p style={{
      textAlign: "center",
      fontSize: "18px",
      color: "#475569",
      marginBottom: "45px"
    }}>
      Soluções financeiras personalizadas para cada momento.
    </p>

    <div style={{
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
  gap: "24px",
  justifyItems: "center"
}}>

  {[
  ["🏠", "Crédito com Garantia de Imóvel", "Use seu imóvel para taxas menores.", "/credito-com-garantia-de-imovel"],

  ["🏢", "Financiamento", "Conquiste seu imóvel com parcelas planejadas.", "/financiamento-imobiliario"],

  ["💳", " Empréstimo Consignado", "Taxas reduzidas para aposentados e servidores.", "/emprestimo-consignado"],

  ["🚗", "Consórcios", "Planejamento sem juros para seus objetivos.", "/consorcio"],

  ["🛡️", "Seguros", "Proteção para família, patrimônio e empresa.", "/seguro"]
]
.map((item, index) => (
    <Link
  key={index}
  to={item[3]}

  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-8px)";
    e.currentTarget.style.boxShadow = "0 18px 35px rgba(0,0,0,0.12)";
  }}

  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0px)";
    e.currentTarget.style.boxShadow = "0 12px 28px rgba(0,0,0,0.08)";
  }}

  style={{
  background: "white",
  padding: "35px 25px",
  borderRadius: "18px",
  textDecoration: "none",
  color: "#0f172a",
  boxShadow: "0 12px 28px rgba(0,0,0,0.08)",
  transition: "all 0.3s ease",
  cursor: "pointer",
  transform: "translateY(0px)",
  minHeight: "220px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between"
}}
    >
      <div>
        <div style={{
          fontSize: "42px",
          marginBottom: "18px"
        }}>
          {item[0]}
        </div>

        <h3 style={{
          fontSize: "26px",
          lineHeight: "1.25",
          marginBottom: "12px"
        }}>
          {item[1]}
        </h3>

        <p style={{
  color: "#64748b",
  fontSize: "15px",
  lineHeight: "1.6"
}}>
  {item[2]}
</p>
      </div>

      <span style={{
        color: "#1e3a8a",
        fontWeight: "bold",
        marginTop: "20px",
        fontSize: "16px"
      }}>
        Saiba Mais →
      </span>
    </Link>
  ))}

</div>
  </div>
</section>

{/* PROFISSIONAL */}
<section style={{
  padding: "90px 20px",
  background: "white"
}}>
  <div style={{
    maxWidth: "1100px",
    margin: "0 auto",
    textAlign: "center"
  }}>

    <div style={{
      width: "90px",
      height: "90px",
      borderRadius: "50%",
      background: "linear-gradient(135deg,#1e3a8a,#0f172a)",
      margin: "0 auto 25px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontSize: "34px",
      fontWeight: "bold"
    }}>
      CF
    </div>

    <h2 style={{
      fontSize: "42px",
      marginBottom: "25px",
      color: "#0f172a"
    }}>
      Claudio Fernando
    </h2>

    <p style={{
      fontSize: "22px",
      lineHeight: "1.8",
      color: "#334155",
      maxWidth: "900px",
      margin: "0 auto 40px"
    }}>
      Experiência consolidada no mercado financeiro,
      com atuação em instituições financeiras nas áreas
      de gestão de contas, investimentos e relacionamento com clientes.

      Profissional certificado CFP®, CEA e PQO Operações,
      focado em soluções estratégicas de crédito e planejamento financeiro.
    </p>

    <div style={{
      display: "flex",
      gap: "18px",
      justifyContent: "center",
      flexWrap: "wrap"
    }}>

      {[
        "🏅 CEA • ANBIMA",
        "🏆 CFP® • Planejar",
        "💼 Mercado Financeiro"
      ].map((item, index) => (
        <span
          key={index}
          style={{
            background: "#eff6ff",
            color: "#1e3a8a",
            padding: "14px 22px",
            borderRadius: "999px",
            fontWeight: "bold",
            fontSize: "16px",
            boxShadow: "0 10px 20px rgba(0,0,0,0.06)"
          }}
        >
          {item}
        </span>
      ))}

    </div>

    <div style={{ marginTop: "40px" }}>
      <a
        href="https://www.linkedin.com/in/claudiofernand/"
        target="_blank"
        style={{
          background: "#0A66C2",
          color: "white",
          padding: "15px 28px",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold"
        }}
      >
        Conheça Minha Trajetória no LinkedIn
      </a>
    </div>

  </div>
</section>

{/* DEPOIMENTOS */}
<section style={{
  padding: "90px 20px",
  background: "#f8fafc"
}}>
  <div style={{
    maxWidth: "1200px",
    margin: "0 auto"
  }}>

    <h2 style={{
      textAlign: "center",
      fontSize: "42px",
      marginBottom: "15px",
      color: "#0f172a"
    }}>
      O que nossos clientes dizem
    </h2>

    <p style={{
      textAlign: "center",
      fontSize: "18px",
      color: "#64748b",
      marginBottom: "45px"
    }}>
      Confiança construída com atendimento sério e transparente.
    </p>

    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
      gap: "25px"
    }}>

      {[
        ["⭐⭐⭐⭐⭐", "Atendimento rápido e transparente. Explicou tudo com clareza.", "Cliente satisfeito"],

        ["⭐⭐⭐⭐⭐", "Excelente suporte do início ao fim. Processo muito tranquilo.", "Cliente atendido"],

        ["⭐⭐⭐⭐⭐", "Profissional sério e preparado. Recomendo com segurança.", "Cliente aprovado"]
      ].map((item, index) => (
        <div
          key={index}
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "18px",
            boxShadow: "0 12px 28px rgba(0,0,0,0.06)"
          }}
        >
          <div style={{
            fontSize: "22px",
            marginBottom: "18px"
          }}>
            {item[0]}
          </div>

          <p style={{
            fontSize: "18px",
            lineHeight: "1.7",
            color: "#334155",
            marginBottom: "20px"
          }}>
            {item[1]}
          </p>

          <strong style={{
            color: "#1e3a8a"
          }}>
            {item[2]}
          </strong>
        </div>
      ))}

    </div>

  </div>
</section>

   {/* CTA FINAL */}
<section style={{
  background: "linear-gradient(135deg,#0f172a,#1e3a8a)",
  color: "white",
  padding: "90px 20px",
  textAlign: "center"
}}>
  <div style={{
    maxWidth: "900px",
    margin: "0 auto"
  }}>

    <p style={{
      color: "#93c5fd",
      fontWeight: "bold",
      letterSpacing: "1px",
      marginBottom: "15px"
    }}>
      ATENDIMENTO RÁPIDO E PERSONALIZADO
    </p>

    <h2 style={{
      fontSize: "48px",
      color:"white", 

textShadow:"0 4px 10px rgba(0,0,0,0.18)", 
      lineHeight: "1.2",
      marginBottom: "20px"
    }}>
      Descubra a Melhor Solução
      <br />
      Financeira Para Você Hoje
    </h2>

    <p style={{
      fontSize: "22px",
      color: "#dbeafe",
      marginBottom: "35px"
    }}>
      Simulação sem compromisso no WhatsApp.
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
        fontSize: "22px",
        display: "inline-block",
        boxShadow: "0 15px 30px rgba(0,0,0,0.18)"
      }}
    >
      💬 Falar no WhatsApp Agora
    </a>

    <p style={{
      marginTop: "18px",
      color: "#cbd5e1",
      fontSize: "15px"
    }}>
      Resposta rápida em horário comercial.
    </p>

  </div>
</section>

  </div>
</>

  );
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/credito-com-garantia-de-imovel" element={<CreditoImovel />} />
          <Route path="/financiamento-imobiliario" element={<FinanciamentoImobiliario />} />
          <Route path="/emprestimo-consignado" element={<EmprestimoConsignado />} />
          <Route path="/consorcio" element={<Consorcio />} />
          <Route path="/seguro" element={<Seguro />} />
        </Routes>

        <Footer />
        <a
  href="https://wa.me/5511933739876"
  target="_blank"
  style={{
    position: "fixed",
    bottom: "25px",
    right: "25px",
    background: "#25D366",
    color: "white",
    padding: "14px 18px",
    borderRadius: "999px",
    textDecoration: "none",
    fontWeight: "bold",
    boxShadow: "0 10px 25px rgba(0,0,0,0.18)",
    zIndex: "9999",
    fontSize: "18px"
  }}
>
  💬 WhatsApp
</a>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;