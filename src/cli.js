import readlineSync from 'readline-sync';

const name;
const random;
const hello = () => {
  console.log('brain-games');
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
};
const getRandomInt = (min = 1, max = 100) => {
  return Math.floor(Math.random() * (max - min) + min);
};
export { name, random, getRandomInt };
export default hello;
