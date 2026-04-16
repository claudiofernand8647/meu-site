import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Seguro() {
  return (
    <>
      <Helmet>
        <title>Seguros | Proteção Completa</title>
        <meta 
          name="description" 
          content="Seguro auto, residencial e de vida com as melhores condições. Proteja seu patrimônio com segurança." 
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
          Seguros com Proteção Completa para Você
        </h1>

        <p style={{ lineHeight: "1.6" }}>
          Compare opções de seguro auto, residencial e de vida.
          Encontre a melhor proteção com condições acessíveis.
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
          Cotar Seguro
        </a>

        <br /><br />

        <Link to="/">Voltar para Home</Link>

      </div>
    </>
  );
}

export default Seguro;