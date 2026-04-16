import Navbar from "./components/Navbar.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CreditoImovel from "./pages/CreditoImovel.jsx";
import FinanciamentoImobiliario from "./pages/FinanciamentoImobiliario.jsx";
import EmprestimoConsignado from "./pages/EmprestimoConsignado.jsx";
import Consorcio from "./pages/Consorcio.jsx";
import Seguro from "./pages/Seguro.jsx";

function Home() {
  return (
    <div style={{ 
      textAlign: "center", 
      padding: "40px 20px",
      maxWidth: "900px",
      margin: "0 auto"
    }}>

      <h1 style={{ 
        fontSize: '32px',
        lineHeight: '1.3',
        marginBottom: '20px'
      }}>
        Crédito e Soluções Financeiras com as Melhores Taxas
      </h1>

      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        Compare opções de crédito, financiamento, consórcio e seguros.
        Encontre a melhor condição com a Creditomultibancos.
      </p>

      <a 
        href="https://wa.me/5511933739876"
        target="_blank"
        style={{
          background: '#25D366',
          color: 'white',
          padding: '15px 25px',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}
      >
        Falar no WhatsApp
      </a>

      <hr style={{ margin: "40px 0" }} />

      <h2>Nossos Serviços</h2>

      <div style={{ marginTop: "20px" }}>
  <p>
    <Link to="/financiamento-imobiliario">Financiamento Imobiliário</Link>
  </p>

  <p>
    <Link to="/emprestimo-consignado">Empréstimo Consignado</Link>
  </p>

  <p>
    <Link to="/credito-com-garantia-de-imovel">Crédito com Garantia de Imóvel</Link>
  </p>

  <p>
    <Link to="/consorcio">Consórcio</Link>
  </p>
</div>

    </div>
  );
}

function App() {
  return (
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
    </BrowserRouter>
  );
}

export default App;