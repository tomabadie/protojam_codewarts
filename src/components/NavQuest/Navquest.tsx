import { Link } from "react-router";
import "./navquest.css";

interface NavquestProps {
	onReset: () => void;
}

function Navquest({ onReset }: NavquestProps) {
	return (
		<nav className="navquest">
			<div className="difficulty-group">
				<Link to="/quest/easy">
					<button className="easyquest" type="button">
						Facile
					</button>
				</Link>
				<Link to="/quest/intermediate">
					<button className="mediumquest" type="button">
						Intermédiaire
					</button>
				</Link>
				<Link to="/quest/expert">
					<button className="expertquest" type="button">
						Difficile
					</button>
				</Link>
			</div>
			<div className="reset-group">
				<button className="resetquest" type="button" onClick={onReset}>
					Reparo !
				</button>
			</div>
		</nav>
	);
}

export default Navquest;
