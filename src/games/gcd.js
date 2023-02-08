/* eslint-disable import/no-unresolved */
import readlineSync from 'readline-sync';
import { greeting, congrats, check } from '../index.js';

const findGcd = (a, b) => {
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
};

const gcd = () => {
  const gamerName = greeting();

  // start of the game
  console.log('Find the greatest common divisor of given numbers.');

  let i = 0;
  let checking = true;
  // cycle for 3 attempts
  while (i < 3 && checking === true) {
    // randomizing
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    const correctAnswer = String(findGcd(x, y));

    // question
    console.log(`Question: ${x} ${y}`);
    const answer = readlineSync.question('Your answer: ');

    checking = check(gamerName, answer, correctAnswer);
    i += 1;
  }
  // if gamer gave 3 correct answer, he wins
  congrats(checking, gamerName);
};

export default gcd;
