import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import images from '../../images/projeto.png';
import './header.css';

export const Header = () => {
    const navigate = useNavigate();
    
    const toHome = () => {
        navigate("/"); // Página inicial
    };

    return (
        <header>
            <div className="menu">
                <button onClick={toHome}>
                    <img src={images} alt='Projeto' />
                </button>
            </div>
            <div className="pesquisa">
                <input className="pesquisa" type="text" placeholder="Pesquisar" />
            </div>
            <div className="login">
                <label>
                    <Link to="/Login" className="linkLogin"> Login </Link>
                </label>
            </div>
            <div className="ganhadores">
                <label>
                    <Link to="/Ganhadores" className="linkGanhadores"> Ganhadores </Link>
                </label>
            </div>
            <div className="meusSorteios">
                <label>
                    <Link to="/MeusSorteios" className="linkMeusSorteio"> Meus Sorteio </Link>
                </label>
            </div>
            <div className="produtos">
                <label>
                    <Link to="/Produtos" className="linkProdutos"> Produtos </Link>
                </label>
            </div>
        </header>
    );
};

export default Header;