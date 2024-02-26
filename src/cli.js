import readlineSync from "readline-sync";
let name;
let random;
const hello = () => {
  console.log("brain-games");
  console.log("Welcome to the Brain Games!");
  name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}`);
};
const getRandomInt = (num) => {
  return Math.floor(Math.random() * num);
};
export { name, random, getRandomInt };
export default hello;
