import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function CreditoImovel() {
  return (
    <>
      <Helmet>
        <title>Crédito com Garantia de Imóvel | Taxas Baixas</title>
        <meta 
          name="description" 
          content="Crédito com garantia de imóvel com taxas reduzidas, prazos longos e liberação rápida. Compare as melhores opções." 
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
          Crédito com Garantia de Imóvel com Taxas Baixas
        </h1>

        <p style={{ lineHeight: "1.6" }}>
          O crédito com garantia de imóvel, também conhecido como home equity,
          permite acesso a valores maiores, prazos longos e taxas muito mais baixas.
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
            fontWeight: 'bold'
          }}
        >
          Simular agora no WhatsApp
        </a>

        <br /><br />

        <Link to="/">Voltar para Home</Link>

      </div>
    </>
  );
}

export default CreditoImovel;