import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function EmprestimoConsignado() {
  return (
    <>
      <Helmet>
        <title>Empréstimo Consignado | Taxas Baixas</title>
        <meta 
          name="description" 
          content="Empréstimo consignado com taxas reduzidas para aposentados e servidores. Compare opções e aproveite as melhores condições." 
        />
      </Helmet>

      <div style={{ 
        textAlign: "center", 
        padding: "40px 20px",
        maxWidth: "700px",
        margin: "0 auto"
      }}>

        <h1 style={{ 
          fontSize: '28px',
          lineHeight: '1.3',
          marginBottom: '20px'
        }}>
          Empréstimo Consignado com Taxas Baixas
        </h1>

        <p style={{ 
          lineHeight: "1.6",
          fontSize: "16px"
        }}>
          O empréstimo consignado oferece taxas mais baixas e aprovação facilitada,
          ideal para aposentados, pensionistas e servidores públicos.
        </p>

        <br />

        <a 
          href="https://wa.me/5511933739876"
          target="_blank"
          style={{
            background: '#25D366',
            color: 'white',
            padding: '15px 25px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
            display: 'inline-block'
          }}
        >
          Falar no WhatsApp
        </a>

        <br /><br />

        <Link to="/">Voltar para Home</Link>

      </div>
    </>
  );
}

export default EmprestimoConsignado;