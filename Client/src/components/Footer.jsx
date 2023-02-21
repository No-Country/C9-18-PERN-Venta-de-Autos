import React from "react";
import "./Footer.css"

const Footer = () => {
	return (
    <footer>
			<div className="FooterSection">
				<h3>Comprar</h3>
				<a href="">Buscar por categoria</a>
				<a href="">Ver todo el inventario</a>
				<a href="">Encontrar por palabra clave</a>
			</div>
			<div className="FooterSection">
				<h3>Vender / Cambiar</h3>
				<a href="">Cotizar</a>
				<a href="">Publicar</a>
			</div>
			<div className="FooterSection">
				<h3>Acerca de</h3>
				<a href="">Nosotros</a>
				<a href="">Terminos y condiciones</a>
			</div>
			<div className="FooterSection">
				<h3>Mas</h3>
				<a href="">FAQ</a>
			</div>
			<h3 className="Footer-Brand">AUTOSUSADOS.COM</h3>
		</footer>
	);
};

export default Footer;
