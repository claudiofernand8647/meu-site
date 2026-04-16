import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Consorcio() {
  return (
    <>
      <Helmet>
        <title>Consórcio | Sem Juros e Parcelas Acessíveis</title>
        <meta 
          name="description" 
          content="Consórcio para imóveis, veículos e serviços com parcelas acessíveis e sem juros." 
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
  Consórcio com Parcelas Acessíveis e Sem Juros
</h1>

        <p>
          O consórcio é uma excelente alternativa para quem deseja adquirir bens
          de forma planejada, sem juros e com parcelas acessíveis.
        </p>

        <br />

        <a href="https://wa.me/5511933739876" target="_blank">
          Simular Consórcio
        </a>

        <br /><br />

        <Link to="/">Voltar para Home</Link>

      </div>
    </>
  );
}

export default Consorcio;