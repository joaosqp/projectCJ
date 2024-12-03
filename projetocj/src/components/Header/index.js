import { useNavigate, Link } from "react-router-dom";
import "./header.css";

// Componente reutilizável para links de navegação
const NavigationLink = ({ to, className, children }) => (
  <Link to={to} className={className}>
    {children}
  </Link>
);

export const Header = () => {
  return (
    <header>
      <div className="menu">
        <div className="titulo">
          <Link to="/" className="nomeProjeto">Projeto CJ</Link>
        </div>
      </div>
      <div>
        <input className="pesquisa" type="text" placeholder="Pesquisar" />
      </div>
      <nav className="navigation">
        <NavigationLink to="/Login" className="linkLogin">Login</NavigationLink>
        <NavigationLink to="/Ganhadores" className="linkGanhadores">Ganhadores</NavigationLink>
        <NavigationLink to="/MeusSorteios" className="linkMeusSorteio">Meus Sorteios</NavigationLink>
        <NavigationLink to="/Produtos" className="linkProdutos">Produtos</NavigationLink>
      </nav>
    </header>
  );
};
