import { useParams } from "react-router";
import { useState } from "react";
import Navquest from "../NavQuest/Navquest";
import PictureDiscover from "../PictureDiscover/PictureDiscover";
import QuizWindow from "../Quiz_Window/QuizWindow";
import ScrollToTopButton from "../Ontop/ScrollToTopButton";
import "./Quest.css";

const Quest = () => {
	const { level } = useParams() as { level: string };
	const [activeIndexByLevel, setActiveIndexByLevel] = useState<Record<string, number>>({});
	const [answeredByLevel, setAnsweredByLevel] = useState<Record<string, Record<number, boolean>>>({});
	const [resetKey, setResetKey] = useState(0);

	const activeIndex = activeIndexByLevel[level] || 0;

	const setActiveIndex = (index: number) => {
		setActiveIndexByLevel((prev) => ({
			...prev,
			[level]: index,
		}));
	};

	const resetProgress = () => {
		setAnsweredByLevel((prev) => {
			const updated = { ...prev };
			delete updated[level];
			return updated;
		});
		setActiveIndexByLevel((prev) => ({
			...prev,
			[level]: 0,
		}));
		setResetKey((prev) => prev + 1);
	};

	return (
		<section className="quest-section">
			<PictureDiscover
				key={resetKey}
				activeIndex={activeIndex}
				level={level}
				answered={answeredByLevel[level] || {}}
			/>
			<div className="quiz-container">
				<Navquest onReset={resetProgress} />
				<QuizWindow
					activeIndex={activeIndex}
					setActiveIndex={setActiveIndex}
					setAnsweredByLevel={setAnsweredByLevel}
					answered={answeredByLevel[level] || {}}
				/>
			</div>
			<ScrollToTopButton />
		</section>
	);
};

export default Quest;
