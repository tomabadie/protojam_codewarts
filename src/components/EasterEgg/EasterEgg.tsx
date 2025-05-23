import ayoub from "../../../public/img/ayoub.png";
import yavuz from "../../../public/img/yavuz.png";
import nicolas from "../../../public/img/nicolas.png";
import "./EasterEgg.css";

function EasterEgg() {
	return (
		<section className="easter-egg">
			<h1>Bravo vous avez trouvé la caverne secrète !</h1>

			<div className="img-easter">
				<img src={ayoub} alt="" />
				<img src={nicolas} alt="" />
				<img src={yavuz} alt="" />
			</div>
		</section>
	);
}

export default EasterEgg;
