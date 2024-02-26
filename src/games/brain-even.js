import {name, getRandomInt, } from '../cli.js';
import readlineSync from 'readline-sync';
const isEven = () => {
	console.log(`'Answer "yes" if the number is even, otherwise answer "no"'`);
	let winCount = 0;
	while (winCount < 3) {
			const question = getRandomInt(100);
			console.log(`Question: ${question}`);
			const answer = readlineSync.question('Your answer: ');
			let correctAnswer = question % 2;
			if (correctAnswer === 1) {
					correctAnswer = 'no';
			} else if (correctAnswer === 0) {
					correctAnswer = 'yes';
			}
			if (correctAnswer === answer) {
					console.log('Correct!');
					winCount = winCount + 1;
			} else if (correctAnswer !== answer) {
					console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
					console.log(`Let's try again, ${name}!`);
					return;
			}
	}
	if (winCount === 3) {
			console.log(`Congratulations, ${name}!`);
	}
};
export default isEven;
