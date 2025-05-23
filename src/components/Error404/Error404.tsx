import { useEffect } from "react";
import { useNavigate } from "react-router";
import looser from "../../assets/img/404Loosers.png";
import "./Error404.css";

const Error404 = () => {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate("/");
		}, 10000);
	});

	return (
		<div className="img-404">
			<img src={looser} alt="404" />
		</div>
	);
};

export default Error404;
