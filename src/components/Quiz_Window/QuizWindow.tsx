import { useEffect, useState } from "react";
import type React from "react";
import { useParams } from "react-router";
import data from "../../../Data/data.json";
import "./QuizWindow.css";

interface Question {
	title: string;
	question: string;
	choices: string[];
	answer: string;
	code: string;
}

interface Section {
	description: string;
	questions: Question[];
}

const QuizWindow = () => {
	const { level } = useParams() as { level: keyof typeof data.levels };
	const [sections, setSections] = useState<[string, Section][]>([]);
	const [activeIndex, setActiveIndex] = useState(0);
	const [answered, setAnswered] = useState<Record<number, boolean>>({});
	const [codes, setCodes] = useState<Record<number, string>>({});
	const [selectedChoices, setSelectedChoices] = useState<
		Record<number, string[]>
	>({});
	const [revealed, setRevealed] = useState<Record<number, boolean>>({});

	useEffect(() => {
		if (level && data.levels[level]) {
			const loadedSections = Object.entries(data.levels[level]) as [
				string,
				Section,
			][];
			setSections(loadedSections);
		}
	}, [level]);

	const getQuestionByIndex = (globalIndex: number) => {
		let counter = 0;
		for (const [sectionName, section] of sections) {
			for (let i = 0; i < section.questions.length; i++) {
				if (counter === globalIndex) {
					return {
						question: section.questions[i],
						sectionName,
						localIndex: i,
						globalIndex,
					};
				}
				counter++;
			}
		}
		return undefined;
	};

	const autoValidateUntil = (index: number) => {
		const newAnswered: Record<number, boolean> = {};
		const newRevealed: Record<number, boolean> = {};
		for (let i = 0; i <= index; i++) {
			newAnswered[i] = true;
			newRevealed[i] = true;
		}
		setAnswered((prev) => ({ ...prev, ...newAnswered }));
		setRevealed((prev) => ({ ...prev, ...newRevealed }));
	};

	const handleAnswer = (choice: string, index: number) => {
		if (answered[index]) return;
		setSelectedChoices((prev) => ({
			...prev,
			[index]: [...(prev[index] || []), choice],
		}));

		const result = getQuestionByIndex(index);
		if (!result) return;

		if (choice === result.question.answer) {
			setAnswered((prev) => ({ ...prev, [index]: true }));
			setCodes((prev) => ({ ...prev, [index]: result.question.code }));
			setRevealed((prev) => ({ ...prev, [index]: true }));
		}
	};

	const handleCodeInput = (index: number, value: string) => {
		const result = getQuestionByIndex(index);
		if (!result) return;

		setCodes((prev) => ({ ...prev, [index]: value }));

		if (value === result.question.code) {
			autoValidateUntil(index);
			setActiveIndex(index);
		}
	};

	const handleNext = (index: number) => {
		if (answered[index]) setActiveIndex(index + 1);
	};

	const renderFormattedQuestion = (
		question: string,
		answer?: string,
	): React.ReactNode[] => {
		const parts = question.split("_____");
		const displayValue = answer ? (
			<strong style={{ textDecoration: "underline" }}>{answer}</strong>
		) : (
			<span style={{ textDecoration: "underline" }}>_____</span>
		);

		return parts.flatMap((part, i) => {
			const items = [<span key={`part-${i}-${part}`}>{part}</span>];
			if (i < parts.length - 1) {
				items.push(
					<span key={`answer-${i}-${answer || "blank"}`}>{displayValue}</span>,
				);
			}
			return items;
		});
	};

	return (
		<div className="quiz-window">
			{sections.map(([sectionName, section], sectionIndex) => (
				<div key={sectionName} className="section-block">
					<div className="section-description">
						<h3>{sectionName.toUpperCase()}</h3>
						<p>{section.description}</p>
					</div>

					{section.questions.map((_, questionIndex) => {
						const globalIndex = sectionIndex * 7 + questionIndex;
						const result = getQuestionByIndex(globalIndex);
						if (!result) return null;

						const { question } = result;
						const isActive = globalIndex === activeIndex;
						const isAnswered = answered[globalIndex];
						const displayAnswer = isAnswered ? question.answer : undefined;

						return (
							<div
								key={question.code}
								className={`card ${isActive ? "active" : "inactive"} ${isAnswered ? "validated" : ""}`}
							>
								{isActive ? (
									<>
										<h4>{question.title}</h4>
										<p>
											{renderFormattedQuestion(
												question.question,
												displayAnswer,
											)}
										</p>
										<div className="choices">
											{question.choices.map((choice) => {
												const isCorrect = choice === question.answer;
												const isWrong =
													selectedChoices[globalIndex]?.includes(choice) &&
													!isCorrect;
												const choiceClass =
													isAnswered && revealed[globalIndex]
														? isCorrect
															? "correct"
															: "wrong"
														: isWrong
															? "wrong"
															: "";

												return (
													<button
														type="button"
														key={choice}
														className={`choice-btn ${choiceClass}`}
														onClick={() => handleAnswer(choice, globalIndex)}
														disabled={isAnswered}
													>
														{choice}
													</button>
												);
											})}
										</div>
										<div className="footer">
											<span className="code-label">Code de progression ➡️ </span>
											<input
												className="code-input"
												type="text"
												value={codes[globalIndex] || ""}
												readOnly={isAnswered}
												onChange={(e) =>
													setCodes((prev) => ({
														...prev,
														[globalIndex]: e.target.value,
													}))
												}
											/>
											<button
												type="button"
												className="next-btn"
												disabled={!isAnswered}
												onClick={() => handleNext(globalIndex)}
											>
												Année suivante
											</button>
										</div>
									</>
								) : (
									<div className="collapsed footer">
										<span className="code-label">Code de progression ➡️ </span>
										<div
											className="expand-bar"
											role="button"
											tabIndex={0}
											onClick={() => {
												if (answered[globalIndex]) {
													setActiveIndex(globalIndex);
												}
											}}
											onKeyDown={(e) => {
												if (
													(e.key === "Enter" || e.key === " ") &&
													answered[globalIndex]
												) {
													setActiveIndex(globalIndex);
												}
											}}
										/>
										<input
											className="code-input"
											type="text"
											placeholder="Code..."
											value={codes[globalIndex] || ""}
											onChange={(e) =>
												setCodes((prev) => ({
													...prev,
													[globalIndex]: e.target.value,
												}))
											}
										/>
										<button
											type="button"
											className="next-btn"
											onClick={() =>
												handleCodeInput(globalIndex, codes[globalIndex] || "")
											}
										>
											Go
										</button>
									</div>
								)}
							</div>
						);
					})}
				</div>
			))}
		</div>
	);
};

export default QuizWindow;
