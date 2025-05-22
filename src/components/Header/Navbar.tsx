import "../../style/Navbar.css";
import { Link } from "react-router";

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
						<Link to="/Quest">
							<li>Sortilèges</li>
						</Link>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Navbar;
