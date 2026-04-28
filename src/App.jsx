import Navbar from "./components/Navbar.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CreditoImovel from "./pages/CreditoImovel.jsx";
import FinanciamentoImobiliario from "./pages/FinanciamentoImobiliario.jsx";
import EmprestimoConsignado from "./pages/EmprestimoConsignado.jsx";
import Consorcio from "./pages/Consorcio.jsx";
import Seguro from "./pages/Seguro.jsx";
import Footer from "./components/Footer.jsx";
import { Helmet, HelmetProvider } from "react-helmet-async";
function Home() {
  return (
    <>
      <Helmet>
        <title>
          Crédito Multi Bancos | Crédito com Garantia, Financiamento e Consignado
        </title>

        <meta
          name="description"
          content="Especialista em crédito com garantia de imóvel, financiamento imobiliário, empréstimo consignado, consórcio e seguros. Atendimento consultivo em São Paulo e Brasil."
        />

        <meta
          name="keywords"
          content="crédito com garantia, financiamento imobiliário, empréstimo consignado, consórcio, seguros, São Paulo"
        />
      </Helmet>
    <div style={{ fontFamily: "Arial, sans-serif", color: "#1a1a1a" }}>

      {/* HERO */}
  <section style={{
  background: "linear-gradient(135deg,#0f172a,#1e3a8a)",
  color: "white",
  padding: "95px 20px",
  textAlign: "center"
}}>
  <div style={{
    maxWidth: "950px",
    margin: "0 auto"
  }}>

    <p style={{
      color: "#93c5fd",
      fontWeight: "bold",
      marginBottom: "15px",
      letterSpacing: "1px"
    }}>
      ESPECIALISTA EM SOLUÇÕES FINANCEIRAS
    </p>

    <h1 style={{
      fontSize: "48px",
      lineHeight: "1.2",
      marginBottom: "22px"
    }}>
      Crédito Inteligente com Segurança,
      Taxas Competitivas e Atendimento Consultivo
    </h1>

    <p style={{
      fontSize: "20px",
      maxWidth: "760px",
      margin: "0 auto 35px",
      color: "#dbeafe"
    }}>
      Crédito com garantia de imóvel, financiamento,
      consignado, consórcio e seguros com atendimento especializado.
    </p>

    <div style={{
      display: "flex",
      justifyContent: "center",
      gap: "15px",
      flexWrap: "wrap"
    }}>

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

      <a
        href="#servicos"
        style={{
          border: "1px solid white",
          color: "white",
          padding: "16px 28px",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold"
        }}
      >
        Ver Serviços
      </a>

    </div>
  </div>
</section>


      {/* NÚMEROS */}
<section style={{
  background: "#0b1120",
  color: "white",
  padding: "30px 20px"
}}>
  <div style={{
    maxWidth: "1100px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: "20px",
    textAlign: "center"
  }}>
    <div>
      <h3 style={{ fontSize: "30px", marginBottom: "8px" }}>+10</h3>
      <p>Anos de experiência</p>
    </div>

    <div>
      <h3 style={{ fontSize: "30px", marginBottom: "8px" }}>+500</h3>
      <p>Clientes atendidos</p>
    </div>

    <div>
      <h3 style={{ fontSize: "30px", marginBottom: "8px" }}>100%</h3>
      <p>Atendimento consultivo</p>
    </div>

    <div>
      <h3 style={{ fontSize: "30px", marginBottom: "8px" }}>CEA / CFP</h3>
      <p>Certificações financeiras</p>
    </div>
  </div>
</section>

      {/* SERVIÇOS */}
<section
  id="servicos"
  style={{ padding: "70px 20px", background: "#f8fafc" }}
>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{
            textAlign: "center",
            fontSize: "32px",
            marginBottom: "40px"
          }}>
            Nossos Serviços
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px"
          }}>

            {[
  {
    titulo: "Crédito com Garantia",
    link: "/credito-com-garantia-de-imovel"
  },
  {
    titulo: "Financiamento Imobiliário",
    link: "/financiamento-imobiliario"
  },
  {
    titulo: "Empréstimo Consignado",
    link: "/emprestimo-consignado"
  },
  {
    titulo: "Consórcios",
    link: "/consorcio"
  },
  {
    titulo: "Seguros",
    link: "/seguro"
  }
].map((item, i) => (
  <div key={i} style={{
    background: "white",
    padding: "30px",
    borderRadius: "14px",
    boxShadow: "0 12px 25px rgba(0,0,0,0.08)",
    textAlign: "center",
    transition: "0.3s"
  }}>
    <h3 style={{
      fontSize: "22px",
      marginBottom: "15px",
      color: "#0f172a"
    }}>
      {item.titulo}
    </h3>

    <Link
      to={item.link}
      style={{
        background: "#1e3a8a",
        color: "white",
        padding: "10px 18px",
        borderRadius: "8px",
        textDecoration: "none",
        display: "inline-block",
        fontWeight: "bold"
      }}
    >
      Saiba Mais
    </Link>
  </div>
))}

          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section style={{ padding: "70px 20px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{
            textAlign: "center",
            fontSize: "32px",
            marginBottom: "40px"
          }}>
            Por que escolher a Creditomultibancos?
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px"
          }}>
            <div>✔ Atendimento rápido</div>
            <div>✔ Taxas competitivas</div>
            <div>✔ Especialistas no mercado</div>
            <div>✔ Soluções personalizadas</div>
          </div>
        </div>
      </section>

      {/* AUTORIDADE */}
<section style={{
  padding: "70px 20px",
  background: "#ffffff"
}}>
  <div style={{
    maxWidth: "950px",
    margin: "0 auto",
    textAlign: "center"
  }}>

    <div style={{
      width: "90px",
      height: "90px",
      borderRadius: "50%",
      background: "#1e3a8a",
      color: "white",
      margin: "0 auto 20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "32px",
      fontWeight: "bold"
    }}>
      CF
    </div>

    <h2 style={{
      fontSize: "32px",
      marginBottom: "20px",
      color: "#0f172a"
    }}>
      Claudio Fernando
    </h2>

    <p style={{
      fontSize: "18px",
      lineHeight: "1.8",
      maxWidth: "760px",
      margin: "0 auto 25px"
    }}>
      
Experiência consolidada no mercado financeiro, com atuação em instituições financeiras nas áreas de gestão de contas, investimentos e relacionamento com clientes.

Profissional certificado CFP®, CEA e PQO Operações, focado em soluções estratégicas de crédito e planejamento financeiro.
</p>

    <div style={{
  display: "flex",
  gap: "14px",
  justifyContent: "center",
  flexWrap: "wrap",
  marginBottom: "28px"
}}>

  <span style={{
    background: "linear-gradient(135deg,#dbeafe,#eff6ff)",
    color: "#1e3a8a",
    padding: "12px 18px",
    borderRadius: "999px",
    fontWeight: "bold",
    fontSize: "15px",
    boxShadow: "0 6px 14px rgba(30,58,138,0.10)"
  }}>
    🏅 CEA • ANBIMA
  </span>

  <span style={{
    background: "linear-gradient(135deg,#dbeafe,#eff6ff)",
    color: "#1e3a8a",
    padding: "12px 18px",
    borderRadius: "999px",
    fontWeight: "bold",
    fontSize: "15px",
    boxShadow: "0 6px 14px rgba(30,58,138,0.10)"
  }}>
    🏆 CFP® • Planejar
  </span>

  <span style={{
    background: "linear-gradient(135deg,#dbeafe,#eff6ff)",
    color: "#1e3a8a",
    padding: "12px 18px",
    borderRadius: "999px",
    fontWeight: "bold",
    fontSize: "15px",
    boxShadow: "0 6px 14px rgba(30,58,138,0.10)"
  }}>
    💼 Mercado Financeiro
  </span>

</div>

    <a
      href="https://www.linkedin.com/in/claudiofernand/"
      target="_blank"
      style={{
        background:"#0A66C2",
        color:"white",
        padding:"14px 26px",
        borderRadius:"8px",
        textDecoration:"none",
        fontWeight:"bold",
        display:"inline-block"
      }}
    >
      Ver Perfil no LinkedIn
    </a>
    

  </div>
</section>

{/* DEPOIMENTOS */}
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
      marginBottom: "40px",
      color: "#0f172a"
    }}>
      O que nossos clientes dizem
    </h2>

    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
      gap: "20px"
    }}>

      <div style={{
        background: "white",
        padding: "25px",
        borderRadius: "14px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.06)"
      }}>
        <p>"Atendimento rápido e transparente. Recomendo."</p>
        <strong>- Cliente satisfeito</strong>
      </div>

      <div style={{
        background: "white",
        padding: "25px",
        borderRadius: "14px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.06)"
      }}>
        <p>"Excelente suporte durante todo o processo."</p>
        <strong>- Cliente atendido</strong>
      </div>

      <div style={{
        background: "white",
        padding: "25px",
        borderRadius: "14px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.06)"
      }}>
        <p>"Profissional sério, explicou tudo com clareza."</p>
        <strong>- Cliente aprovado</strong>
      </div>

    </div>
  </div>
</section>

      {/* CTA FINAL */}
      <section style={{
        background: "#1e3a8a",
        color: "white",
        padding: "70px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "34px", marginBottom: "20px" }}>
          Fale agora com um especialista
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
          Chamar no WhatsApp
        </a>
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
      </BrowserRouter>
</HelmetProvider>
  );
}

export default App;