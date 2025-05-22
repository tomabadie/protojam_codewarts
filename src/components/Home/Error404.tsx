import { useEffect } from "react";
import { useNavigate } from "react-router";

const Error404 = () => {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate("/");
		}, 3000);
	});

	return (
		<div>
			<h1>404</h1>
		</div>
	);
};

export default Error404;
