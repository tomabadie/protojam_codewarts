import logo from "../../assets/logo.png";
import "../../style/Navbar.css";
import { Link } from "react-router";

const Navbar = () => {
	return (
		<>
			<div className="navbar">
				<div className="logo-1">
					<Link to="404">
						<img src={logo} alt="logo" />
					</Link>
				</div>

				<div className="navbar-pages">
					<ul>
						<Link to="/">
							<li>HOME</li>
						</Link>
					</ul>
					<ul>
						<Link to="/Quest">
							<li>QUEST</li>
						</Link>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Navbar;
