import { Link } from "react-router";
import "./Navbar.css";

const Navbar = () => {
	return (
		<>
			<div className="navbar">
				<div className="navbar-pages">
					<ul>
						<Link to="/">
							<li>Accueil</li>
						</Link>
					</ul>
					<ul>
						<Link to="/quest/easy">
							<li>Sortilèges</li>
						</Link>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Navbar;
