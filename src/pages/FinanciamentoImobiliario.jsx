import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
function FinanciamentoImobiliario() {
  return (
    <>
      <Helmet>
        <title>Financiamento Imobiliário | Taxas Baixas | Creditomultibancos</title>
        <meta 
          name="description" 
          content="Financiamento imobiliário com taxas competitivas, prazos longos e aprovação facilitada. Compare as melhores opções com a Creditomultibancos." 
        />
      </Helmet>

      <div style={{ 
        fontFamily: 'Arial', 
        padding: '40px', 
        textAlign: 'center' 
      }}>
        
        <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>
  Financiamento Imobiliário com as Melhores Taxas
</h1>

        <p style={{ maxWidth: '600px', margin: '20px auto' }}>
          O financiamento imobiliário permite adquirir seu imóvel com condições acessíveis,
          prazos longos e taxas competitivas. Na Creditomultibancos você compara diversas opções
          e encontra a melhor solução para o seu perfil.
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

        <br /><br />

        <Link to="/">
  Voltar para Home
</Link>

      </div>
    </>
  );
}

export default FinanciamentoImobiliario;