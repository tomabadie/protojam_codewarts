import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";
import github from "../../assets/github.png";
import "../../style/Footer.css";

const Footer = () => {
	return (
		<>
			<div className="footer">
				<ul className="logo">
					<li className="logo-instagram">
						<a href="https://www.instagram.com/wildcodeschoolofficial/?hl=fr">
							<img src={instagram} alt="logo d'instagram" />
						</a>
					</li>
					<li className="logo-twitter">
						<a href="https://x.com/i/flow/login?redirect_after_login=%2FWildCodeSchool">
							<img src={twitter} alt="logo de twitter" />
						</a>
					</li>
					<li className="logo-youtube">
						<a href="https://www.youtube.com/watch?v=ud5iNW3Wn8I">
							<img src={youtube} alt="logo de youtbe" />
						</a>
					</li>
					<li className="logo-github">
						<a href="https://github.com/tomabadie/protojam_codewarts">
							<img src={github} alt="logo de github" />
						</a>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Footer;
