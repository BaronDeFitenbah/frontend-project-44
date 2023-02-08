/* eslint-disable import/no-unresolved */
import readlineSync from 'readline-sync';
import { greeting, congrats, check } from '../index.js';

const calculator = () => {
  const gamerName = greeting();

  // start of the game
  console.log('What is the result of the expression?');

  let i = 0;
  let checking = true;
  const operationArr = ['*', '+', '-'];
  // cycle for 3 attempts
  while (i < 3 && checking === true) {
    // randomizing
    const x = Math.floor(Math.random() * 30);
    const y = Math.floor(Math.random() * 30);
    const operation = operationArr[Math.floor(Math.random() * 3)];
    // and remembering correct answer
    let correctAnswer = 0;
    switch (operation) {
      case '*':
        correctAnswer = String(x * y);
        break;
      case '+':
        correctAnswer = String(x + y);
        break;
      case '-':
        correctAnswer = String(x - y);
        break;
      default:
        correctAnswer = 0;
    }
    // question
    console.log(`Question: ${x} ${operation} ${y}`);
    const answer = readlineSync.question('Your answer: ');

    checking = check(gamerName, answer, correctAnswer);
    i += 1;
  }
  // if gamer gave 3 correct answer, he wins
  congrats(checking, gamerName);
};

export default calculator;
