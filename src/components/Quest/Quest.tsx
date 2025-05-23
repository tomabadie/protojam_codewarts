import { useParams } from "react-router";
import { useState } from "react";
import Navquest from "../NavQuest/Navquest";
import PictureDiscover from "../PictureDiscover/PictureDiscover";
import QuizWindow from "../Quiz_Window/QuizWindow";
import "./Quest.css";

const Quest = () => {
	const { level } = useParams() as { level: string };
	const [activeIndex, setActiveIndex] = useState<number>(0);
	const [answeredByLevel, setAnsweredByLevel] = useState<Record<string, Record<number, boolean>>>({});

	return (
		<section className="quest-section">
			<PictureDiscover
				activeIndex={activeIndex}
				level={level}
				answered={answeredByLevel[level] || {}}
			/>
			<div className="quiz-container">
				<Navquest />
				<QuizWindow
					activeIndex={activeIndex}
					setActiveIndex={setActiveIndex}
					setAnsweredByLevel={setAnsweredByLevel}
				/>
			</div>
		</section>
	);
};

export default Quest;
