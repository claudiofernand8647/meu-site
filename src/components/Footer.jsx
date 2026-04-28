function Footer() {
  return (
    <footer style={{
      background: "#0b1120",
      color: "white",
      padding: "50px 20px 30px"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
        gap: "30px"
      }}>

        {/* Marca */}
        <div>
          <h3 style={{
            fontSize: "26px",
            marginBottom: "15px"
          }}>
            Crédito Multi Bancos
          </h3>

          <p style={{
            color: "#cbd5e1",
            lineHeight: "1.8"
          }}>
            Soluções financeiras personalizadas com atendimento consultivo e especializado.
          </p>
        </div>

        {/* Contato */}
<div>
  <h4 style={{ marginBottom: "15px" }}>Contato</h4>

  <a
    href="https://wa.me/5511933739876"
    target="_blank"
    style={{
      color: "white",
      textDecoration: "none",
      display: "block",
      marginBottom: "10px"
    }}
  >
    Telefone / WhatsApp
(11) 93373-9876
  </a>

  <p>📧 claudio.silva@creditomultibancos.com.br</p>
</div>

        {/* Links */}
        <div>
          <h4 style={{ marginBottom: "12px" }}>Institucional</h4>

          <a href="/" style={link}>Home</a>

<a href="/#servicos" style={link}>
  Serviços
</a>

<a
  href="https://www.linkedin.com/in/claudiofernand/"
  target="_blank"
  style={link}
>
  LinkedIn
</a>
        </div>

      </div>

      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.1)",
        marginTop: "30px",
        paddingTop: "20px",
        textAlign: "center",
        color: "#94a3b8",
        fontSize: "14px"
      }}>
        © 2026 Crédito Multi Bancos. Todos os direitos reservados.
      </div>
    </footer>
  );
}
const link = {
  display: "block",
  color: "white",
  textDecoration: "none",
  marginBottom: "10px"
};
export default Footer;