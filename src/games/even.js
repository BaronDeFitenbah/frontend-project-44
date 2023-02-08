/* eslint-disable import/no-extraneous-dependencies */
import readlineSync from 'readline-sync';
import { check, congrats, greeting } from '../index.js';

const evenNumber = () => {
  // greeting
  const gamerName = greeting();

  // start of the game
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let i = 0;
  let checking = true;
  // cycle for 3 attempts
  while (i < 3 && checking === true) {
    // randomizing a number
    const x = Math.floor(Math.random() * 100);
    // and remembering correct answer
    let correctAnswer = '';
    console.log(`Question: ${x}`);
    const answer = readlineSync.question('Your answer: ');
    if (x % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }

    checking = check(gamerName, answer, correctAnswer);
    i += 1;
  }

  congrats(checking, gamerName);
};

export default evenNumber;
