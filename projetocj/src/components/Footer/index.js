import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <label className="sobrenos">
                <Link to="/aempresa" className="aempresa">A empresa</Link>
            </label>
            <label className="comocomprar">
                <Link to="/comocomprar" className="comocomprar">Como comprar</Link>
            </label>
            <label className="privacidade">
                <Link to="/privacidade" className="privacidade">Privacidade e Segurança</Link>
            </label>
            <label className="trocas">
                <Link to="/trocas" className="trocas">Trocas</Link>
            </label>
            <label className="acompanharpedido">
                <Link to="/acompanharpedido" className="acompanharpedido">Acompanhar Pedido</Link>
            </label>
            <label className="politicadeentrega">
                <Link to="/politicadeentrega" className="politicadeentrega">Política de Entrega</Link>
            </label>
        </footer>
    );
};

export default Footer;