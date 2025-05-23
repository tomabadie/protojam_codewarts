import ayoub from "../../assets/img/ayoub.png";
import yavuz from "../../assets/img/yavuz.png";
import nicolas from "../../assets/img/nicolas.png";
import "./EasterEgg.css";

function EasterEgg() {
	return (
		<section className="easter-egg">
			<h1>Bravo vous avez trouvé la caverne secrète !</h1>

			<div className="img-easter">
				<img src={ayoub} alt="ayoub" />
				<img src={nicolas} alt="nicolas" />
				<img src={yavuz} alt="yavuz" />
			</div>
		</section>
	);
}

export default EasterEgg;
