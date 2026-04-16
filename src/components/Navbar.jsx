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

export default Navbar;