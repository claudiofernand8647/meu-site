import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "rgba(15,23,42,0.96)",
        backdropFilter: "blur(10px)",
        position: "sticky",
        top: "0",
        zIndex: "999",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "16px 24px"
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap"
        }}
      >

        {/* LOGO */}
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "30px",
            letterSpacing: "-0.5px"
          }}
        >
          Crédito Multi Bancos
        </Link>

        {/* MENU */}
        <div
          style={{
            display: "flex",
            gap: "22px",
            alignItems: "center",
            flexWrap: "wrap"
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
                fontSize: "15px",
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