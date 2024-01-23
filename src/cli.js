console.log(`brain-games`);
console.log('Welcome to the Brain Games!');

//импортирует библиотеку
import readlineSync from 'readline-sync';

//выводит имя пользователя
const name = readlineSync.question(`May I have your name? :`);

console.log(`Hello, ${name}!`); 