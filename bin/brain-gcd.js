#!/usr/bin/env node
import readlineSync from 'readline-sync';
import hello, { getRandomInt } from '../src/cli.js';
import { name } from '../src/cli.js';
hello();
let r;
let counter = 0;
export const gcd = (a, b) => {
  while (a !== b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }
  return a;
};
const gcdGame = () => {
  const num1 = getRandomInt(0, 100);
  const num2 = getRandomInt(0, 100);
  const correctGcd = gcd(num1, num2);
  console.log(`Find the greatest common divisor of given numbers.`);
  console.log(`Question: ${num1} ${num2}`);
  r = parseInt(readlineSync.question('Your answer: ')) || ' ';
  if (r === correctGcd) {
    console.log('Correct!');
    counter += 1;
  } else {
    console.log(`'${r}' is wrong answer ;(, Correct answer: '${correctGcd}'`);
    console.log(`Let's try again, ${name}!`);
    return;
  }
  if (counter > 0 && counter < 3) {
    gcdGame();
  }
};
gcdGame();
if (counter === 3) {
  console.log(`Congratulations, ${name}!`);
}
export default gcdGame;
