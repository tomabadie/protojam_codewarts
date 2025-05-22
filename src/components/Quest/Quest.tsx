import { useState } from "react";
import Navquest from "../NavQuest/Navquest";
import PictureDiscover from "../PictureDiscover/PictureDiscover";
import QuizWindow from "../Quiz_Window/QuizWindow";
import "./Quest.css"

const Quest = () => {

	const [activeIndex, setActiveIndex] = useState<number>(0);

	return (
		<section className="quest-section">
			<PictureDiscover activeIndex={activeIndex} />
			<div className="quiz-container">
				<Navquest />
				<QuizWindow activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
			</div>
		</section>
	);
};

export default Quest;
