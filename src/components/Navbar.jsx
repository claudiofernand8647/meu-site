import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";

function Navbar() {
  return (
    <nav
      style={{
        background: "rgba(21, 23, 28, 0.96)",
        backdropFilter: "blur(10px)",
        position: "sticky",
        top: "0",
        zIndex: "999",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: window.innerWidth < 768 ? "10px 14px" : "16px 24px",
      }}
    >
      <div
  style={{
    maxWidth: "1280px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "18px",
    flexWrap: window.innerWidth < 768 ? "wrap" : "nowrap"
  }}
>

        {/* LOGO */}
        <Link
  to="/"
  style={{
    display: "flex",
    alignItems: "center",
    textDecoration: "none"
  }}
>
  <img
  src={logo}
  alt="Crédito Multi Bancos"
  style={{
    height: window.innerWidth < 768 ? "42px" : "72px",
    objectFit: "contain"
  }}
/>
</Link>

        {/* MENU */}
        <div
  style={{
    display: "flex",
    gap: window.innerWidth < 768 ? "10px" : "22px",
    alignItems: "center",
    overflowX: "auto",
    whiteSpace: "nowrap",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    flex: 1,
    justifyContent: "center"
  }}
>
          {[
            ["Crédito com Garantia", "/credito-com-garantia-de-imovel"],
            ["Financiamento", "/financiamento-imobiliario"],
            ["Consignado", "/emprestimo-consignado"],
            ["Consórcio", "/consorcio"],
            ["Seguros", "/seguro"]
          ].map((item, index) => (
            <Link
              key={index}
              to={item[1]}
              style={{
  color: "#e2e8f0",
  textDecoration: "none",
  fontWeight: "600",
  fontSize: window.innerWidth < 768 ? "11px" : "15px",
  padding: window.innerWidth < 768 ? "4px 0" : "0",
  transition: "0.3s"
}}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#22c55e";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#e2e8f0";
              }}
            >
              {item[0]}
            </Link>
          ))}

          {/* CTA */}
          <a
            href="https://wa.me/5511933739876"
            target="_blank"
            style={{
              background: "#25D366",
              color: "white",
              padding: "12px 18px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "15px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.15)"
            }}
          >
            WhatsApp
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;