import Navquest from "../NavQuest/Navquest";
import PictureDiscover from "../PictureDiscover/PictureDiscover";
import QuizWindow from "../Quiz_Window/QuizWindow";
import "./Quest.css"

const Quest = () => {
	return (
		<section className="quest-section">
			<PictureDiscover />
			<div className="quiz-container">
				<Navquest />
				<QuizWindow />
			</div>
		</section>
	);
};

export default Quest;
