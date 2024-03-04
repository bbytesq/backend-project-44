#!/usr/bin/env node
import readlineSync from 'readline-sync';
import hello, { getRandomInt } from '../src/cli.js';
import { name } from '../src/cli.js';

hello();
let counter = 0;
let r;
console.log(`What number is missing in the progression?`);
const progression = () => {
  const num1 = getRandomInt(100);
  let arr = [num1];
  const num2 = getRandomInt(5, 10);
  const num3 = getRandomInt(2, 6);
  for (let i = 0; i <= num2; i += 1) {
    arr.push(arr[i] + num3);
  }
  const hideNum = getRandomInt(1, arr.length);
  const trueVal = arr[hideNum];
  arr[hideNum] = '..';
  console.log(`Question: ${arr.join(' ')}`);
  r = parseInt(readlineSync.question('Your answer: '));
  if (r === trueVal) {
    console.log('Correct!');
    counter += 1;
  } else {
    console.log(`'${r}' is wrong answer ;(, Correct answer: '${trueVal}'.`);
    console.log(`Let's try again, ${name}!`);
    return;
  }
  if (counter > 0 && counter < 3) {
    progression();
  }
};
progression();
if (counter === 3) {
  console.log(`Congratulations, ${name}!`);
}
