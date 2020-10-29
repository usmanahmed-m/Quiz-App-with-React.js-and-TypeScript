import { shuffleArray } from "./utilities";

export const fetchQuestion = async (
  amount: number,

  difficutly: Difficutly
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=18&difficulty=${difficutly}&type=multiple`;

  const data = await (await fetch(endpoint)).json();

  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};

export enum Difficutly {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}
