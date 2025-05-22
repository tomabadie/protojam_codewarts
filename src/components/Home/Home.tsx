import { Link } from "react-router";
import "../../style/Home.css";
import oeuf from "../../assets/oeuf.png";

function Home() {
	return (
		<section className="home-section">
			<h1>Bienvenue à CodeWarts !</h1>

			<p>
				Sorciers, sorcières et novices du code, préparez-vous à un voyage
				ensorcelé dans le monde mystérieux du développement web !
				<br />
				<br />
				Ici, pas de potions magiques ni de cours de défense contre les forces du
				mal, mais une initiation HTML, CSS , JavaScript et React qui
				transformera ton clavier en une véritable baguette magique.
				<br />
				<br />
				Le défi ? Réponds correctement aux 14 énigmes de chaque niveau et
				dévoile progressivement une image mystère floutée (un vrai sortilège !)
				Progresse à travers les trois niveaux pour devenir un Grand Mage du
				Code.
				<br />
				<br />À qui s’adresse CodeWarts ? Que tu sois un jeune apprenti ou un
				grand sorcier curieux, ce jeu est fait pour tous ceux qui souhaitent
				s'initier au monde magique du développement web. Grâce à une expérience
				ludique et immersive, apprendre le code devient aussi captivant qu'un
				duel de sorciers !
				<br />
				<br />
				Alors, oseras-tu relever le défi ? Prépare ton grimoire et clique pour
				commencer l'aventure !
			</p>

			<Link to="/quest/easy">
				<button className="home-btn" type="button">
					Lance le Sort !
				</button>
			</Link>

			<Link to="/easter-egg">
				<img src={oeuf} alt="Easter Egg" className="oeuf" />
			</Link>
		</section>
	);
}

export default Home;
