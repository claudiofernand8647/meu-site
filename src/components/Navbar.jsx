<<<<<<< HEAD
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header style={{
      position: "sticky",
      top: "0",
      zIndex: "999",
      background: "rgba(255,255,255,0.96)",
      backdropFilter: "blur(8px)",
      boxShadow: "0 4px 18px rgba(0,0,0,0.06)"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "16px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "20px",
        flexWrap: "wrap"
      }}>

        {/* MARCA */}
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#0f172a",
            fontSize: "24px",
            fontWeight: "bold"
          }}
        >
          Crédito Multi Bancos
        </Link>

        {/* MENU */}
        <nav style={{
  display: "flex",
  gap: "18px",
  flexWrap: "wrap",
  justifyContent: "center"
}}>
  <Link to="/" style={linkStyle}>Home</Link>

  <Link to="/credito-com-garantia-de-imovel" style={linkStyle}>
    Crédito com Garantia
  </Link>

  <Link to="/financiamento-imobiliario" style={linkStyle}>
    Financiamento
  </Link>

  <Link to="/emprestimo-consignado" style={linkStyle}>
    Consignado
  </Link>

  <Link to="/consorcio" style={linkStyle}>
    Consórcio
  </Link>

  <Link to="/seguro" style={linkStyle}>
    Seguros
  </Link>
</nav>

        {/* BOTÃO */}
        <a
          href="https://wa.me/5511933739876"
          target="_blank"
          style={{
            background: "#25D366",
            color: "white",
            padding: "12px 18px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            whiteSpace: "nowrap"
          }}
        >
          WhatsApp
        </a>

      </div>
    </header>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "#334155",
  fontWeight: "600",
  fontSize: "15px"
};

=======
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      padding: "20px",
      borderBottom: "1px solid #ccc",
      marginBottom: "20px"
    }}>
      <Link to="/">Home</Link>
      <Link to="/credito-com-garantia-de-imovel">Crédito Imóvel</Link>
      <Link to="/financiamento-imobiliario">Financiamento</Link>
      <Link to="/emprestimo-consignado">Consignado</Link>
      <Link to="/consorcio">Consórcio</Link>
      <Link to="/seguro">Seguros</Link>
    </div>
  );
}

>>>>>>> 3ccb740b01989aa12f04869fa2f8150bac055d9a
export default Navbar;