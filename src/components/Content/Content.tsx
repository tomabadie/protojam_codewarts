import "../../style/Content.css";
import { Link } from "react-router";

const Content = () => {
	return (
		<div className="content">
			<div className="content-title">
				<h1>Vos début avec CodeWarts</h1>
			</div>

			<br />

			<div className="content-info">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
					dolorum suscipit magnam ea asperiores esse omnis incidunt quaerat
					reprehenderit, tenetur odio ut saepe maiores repellendus, distinctio
					dolorem. Ab corporis, nihil nulla vero maiores quam ad sed ipsam
					tempora quas cupiditate dicta corrupti eaque quibusdam velit dolorum
					inventore suscipit et officiis. Lorem ipsum dolor sit amet
					consectetur, adipisicing elit. Porro ipsum saepe officiis quis laborum
					beatae maxime ad quibusdam impedit inventore, enim cum! Nulla esse
					tenetur laudantium rerum iusto, sit tempora.
				</p>
			</div>

			<br />

			<Link to="/Quest">
				<button className="content-btn" type="button">
					go to quest
				</button>
			</Link>
		</div>
	);
};

export default Content;
