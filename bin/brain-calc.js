#!/usr/bin/env node
import readlineSync from 'readline-sync';
import hello, { getRandomInt } from '../src/cli.js';
import { name } from '../src/cli.js';
hello();
console.log('What is the result of the expression?');
let r;
let counter = 0;
const calc = () => {
  const opers = ['*', '+', '-'];
  const rapon = getRandomInt(0, opers.length - 1);
  let num1 = getRandomInt(0, 100);
  let num2 = getRandomInt(0, 100);
  let result = 0;
  switch (rapon) {
    case 0:
      console.log(`Question: ${num1} * ${num2}`);
      result = num1 * num2;
      break;
    case 1:
      console.log(`Question: ${num1} + ${num2}`);
      result = num1 + num2;
      break;
    case 2:
      console.log(`Question: ${num1} - ${num2}`);
      result = num1 - num2;
      break;
    default:
      break;
  }
  r = readlineSync.question('Your answer: ');
  if (+r === result) {
    console.log('Correct!');
    counter += 1;
  } else {
    console.log(`${r} is wrong answer ;(, Correct answer: ${result}`);
    console.log(`Let's try again, ${name}!`);
    return;
  }
  if (counter > 0 && counter < 3) {
    calc();
  }
};
calc();
if (counter === 3) {
  console.log(`Congratulations, ${name}!`);
}
export default calc;
