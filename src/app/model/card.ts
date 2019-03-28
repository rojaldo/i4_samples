export class Card {

    question: string;
    correctAnswer: string;
    incorrectAnswers: string[] = [];
    answers: string[] = [];
    category: string;
    difficulty: string;
    type: string;
    responded = false;
    rightAnswered = false;
    answerIndex = -1;

    constructor(jsonCard: any) {
        this.category = jsonCard.category;
        this.difficulty = jsonCard.difficulty;
        this.type = jsonCard.type;
        this.question = jsonCard.question;
        this.correctAnswer = jsonCard.correct_answer;
        this.incorrectAnswers = jsonCard.incorrect_answers;
        this.answers = jsonCard.incorrect_answers;
        this.answers.push(jsonCard.correct_answer);
    }
}
