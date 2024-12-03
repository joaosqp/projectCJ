import { useNavigate, Link } from "react-router-dom";
import "./header.css";

export const Header = () => {
    const navigate = useNavigate();
    
    const toHome = () => {
        navigate("/"); // Página inicial
    };

    return (
        <header>
            <div className="menu">
                <div className="titulo">
                    <label htmlFor="cj">Projeto CJ</label>
                    <a className="nomeProjeto" onClick={toHome}>Projeto CJ</a>
                </div>
            </div>
            <div>
                <input className="pesquisa" type="text" placeholder="Pesquisar" />
            </div>
            <div className="login">
                <label>
                    <Link to="/Login" className="linkLogin"> Login </Link>
                </label>
            </div>
        </header>
    )
};