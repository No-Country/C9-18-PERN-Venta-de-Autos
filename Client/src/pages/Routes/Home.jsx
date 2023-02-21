import React from 'react';
import "./Home.css"
import pickup from "../../assets/svg/4x4.svg";
import hatchback from "../../assets/svg/hatchback.svg";
import sedan from "../../assets/svg/sedan.svg";
import suv from "../../assets/svg/suv.svg";
import coupe from "../../assets/svg/coupe.svg";
import dropdown from "../../assets/imgs/dropdown.png";
import { useRef, useState, useEffect } from "react";

const Home = () => {


  const containerRef = useRef();
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver((entries => {
			const entry = entries[0];
			console.log(entry);
		}))
		observer.observe(containerRef.current)
	}, [])
	

  return (
    <div>
			<div className="Head">
				<div className="Head-Textcont">
					<h1>Encontra el vehiculo de tus sueños , con unos KM encima.</h1>
					<button className="btn Mainbtn">MIRA NUESTRAS MEJORES OFERTAS</button>
				</div>
			</div>
			<div className="SaleSelector-Cont">
				<div className="SaleSelector">
				<h3 className="SaleSelector-Title">Busca por el tipo que desees:</h3>
				<div className="SaleSelector-TypesHolder">
					<div className="SaleSelector-Type">
						<img src={sedan} alt="4x4 truck" />
						<h4>Sedan</h4>
					</div>
					<div className="SaleSelector-Type">
						<img src={suv} alt="4x4 truck" />
						<h4>SUV</h4>
					</div>
					<div className="SaleSelector-Type">
						<img src={hatchback} alt="4x4 truck" />
						<h4>Hatchback</h4>
					</div>
					<div className="SaleSelector-Type">
						<img src={coupe} alt="4x4 truck" />
						<h4>Coupe</h4>
					</div>
					<div className="SaleSelector-Type">
						<img src={pickup} alt="4x4 truck" />
						<h4>Pick up</h4>
					</div>
				</div>
				<div className="SaleSelector-btm">
					<div className="SaleSelector-Filters">
						<div className="SaleSelector-Brands">
							<p>Seleccione una marca</p>
							<img className="dropdownImg" src={dropdown} alt="Down arrow" />
						</div>
						<div className="SaleSelector-Brands">
							<p>Kilometraje</p>
							<img className="dropdownImg" src={dropdown} alt="Down arrow" />
						</div>
					</div>
					<button className="btn SaleSelector-Button">Buscar</button>
				</div>
				</div>
			</div>
			<div ref={containerRef} className="SecondSection Section">
				<div id="FirstModal" className="PseudoModal">
					<h3>COMPRA TU USADO DE LA MEJOR MANERA</h3>
					<ul>
						<li>Visitas inmediatas para vehiculos seleccionados</li>
						<li>Compara precios y modelos distintos</li>
						<li>Asesorate con nuestro servicio tecnico</li>
					</ul>
					<button className="btn PseudoModal-btn">
						MIRA NUESTRAS MEJORES OFERTAS
					</button>
				</div>
			</div>
			<div className="ThirdSection Section">
				<div id="SecondModal" className="PseudoModal">
					<h3>PUBLICA TU AUTO CON NOSTROS</h3>
					<ul>
						<li>Ayudate con nuestra sugerencia de precios</li>
						<li>Ofrece multiples medios de pago incluyendo permuta</li>
						<li>Publica una unica vez</li>
					</ul>
					<button className="btn PseudoModal-btn">
						MIRA NUESTRAS MEJORES OFERTAS
					</button>
				</div>
			</div>
		</div>
  );
};

export default Home;