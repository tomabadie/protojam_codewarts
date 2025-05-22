import { useEffect } from "react";
import { useNavigate } from "react-router";
import looser from "../../assets/404Loosers.png";
import "./Error404.css";

const Error404 = () => {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate("/");
		}, 5000);
	});

	return (
		<div className="img-404">
			<img src={looser} alt="404" />
		</div>
	);
};

export default Error404;
