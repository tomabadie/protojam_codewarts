import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";
import "../../style/Footer.css";

const Footer = () => {
	return (
		<>
			<div className="footer">
				<ul className="logo">
					<li className="logo-instagram">
						<img src={instagram} alt="logo d'instagram" />
					</li>
					<li className="logo-twitter">
						<img src={twitter} alt="logo de twitter" />
					</li>
					<li className="logo-youtube">
						<img src={youtube} alt="logo de youtbe" />
					</li>
				</ul>
			</div>
		</>
	);
};

export default Footer;
