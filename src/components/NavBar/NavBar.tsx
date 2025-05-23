import { Link } from "react-router";
import "./NavBar.css";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbar-pages">
				<ul>
					<Link to="/">
						<li>Accueil</li>
					</Link>
				</ul>
				<ul>
					<Link to="/quest/">
						<li>Sortilèges</li>
					</Link>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
