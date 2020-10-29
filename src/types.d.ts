type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: any;
  quesNum: number;
  totalQues: number;
};

type QuestionState = Question & { answers: string[] };

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};
