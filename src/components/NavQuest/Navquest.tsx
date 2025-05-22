import { Link } from "react-router";
import "./navquest.css";

function Navquest() {
	return (
		<nav className="navquest">
			<Link to="/quest/easy">
				<button className="easyquest" type="button">
					Facile
				</button>
			</Link>
			<Link to="/quest/intermediate">
				<button className="mediumquest" type="button">
					Intermediaire
				</button>
			</Link>
			<Link to="/quest/expert">
				<button className="expertquest" type="button">
					Difficile
				</button>
			</Link>
		</nav>
	);
}

export default Navquest;
