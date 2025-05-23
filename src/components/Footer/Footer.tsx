import github from "../../assets/github.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";
import "../Footer/Footer.css";

const Footer = () => {
	return (
		<footer>
			<ul className="logo-list">
				<li className="logo-instagram">
					<a href="https://www.instagram.com/wildcodeschoolofficial/?hl=fr" target="_blank" rel="noopener noreferrer">
						<img src={instagram} alt="instagram" />
					</a>
				</li>
				<li className="logo-twitter">
					<a href="https://x.com/i/flow/login?redirect_after_login=%2FWildCodeSchool" target="_blank" rel="noopener noreferrer">
						<img src={twitter} alt="twitter" />
					</a>
				</li>
				<li className="logo-youtube">
					<a href="https://www.youtube.com/@WildCodeSchool4ever" target="_blank" rel="noopener noreferrer">
						<img src={youtube} alt="youtube" />
					</a>
				</li>
				<li className="logo-github">
					<a href="https://github.com/tomabadie/protojam_codewarts" target="_blank" rel="noopener noreferrer">
						<img src={github} alt="github" />
					</a>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
