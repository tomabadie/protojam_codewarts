import { Link } from "react-router";
import logo from "../../assets/logo.png";
import Navbar from "../NavBar/NavBar";
import "./Header.css";

const Header = () => {
	return (
		<div className="header">
			<div className="logo-1">
				<Link to="404">
					<img src={logo} alt="logo" />
				</Link>
			</div>
			<Navbar />
		</div>
	);
};

export default Header;
