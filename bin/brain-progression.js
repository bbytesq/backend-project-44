#!/usr/bin/env node
import readlineSync from 'readline-sync';
import hello, { getRandomInt } from '../src/cli.js';
import { name } from '../src/cli.js';

hello();
console.log(`What number is missing in the progression?`);
let count = 0;
const progressionVal = (answer, trueVal) => {
  if (answer === trueVal) {
    console.log('Correct!');
    count += 1;
  } else {
    count += 10;
    console.log(
      `"${answer}" is wrong answer ;(. Correct answer was "${trueVal}"`
    );
    console.log(`Let's try again, ${name}!`);
  }
};
while (count < 3) {
  const arr = [];
  let firstProgressionVal = getRandomInt(100);
  const progressionDiff = getRandomInt(10);
  while (arr.length !== 10) {
    const result = progressionDiff + firstProgressionVal;
    arr.push(result);
    firstProgressionVal = result;
  }
  const index = getRandomInt(9);
  const trueVal = arr[index - 1] + (arr[index + 1] - arr[index - 1]) / 2;
  arr[index] = '..';
  console.log(`Question: ${arr.join(' ')}`);
  const answer = parseInt(
    readlineSync.question('Your answer: ') || 'no answer'
  );
  progressionVal(answer, trueVal);
  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}
