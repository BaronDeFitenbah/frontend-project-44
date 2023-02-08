/* eslint-disable import/no-unresolved */
import readlineSync from 'readline-sync';
import { greeting, congrats, check } from '../index.js';

const isPrime = (number) => {
  if (number < 4) return 'yes';
  for (let i = 2; i <= (number / 2); i += 1) {
    if (number % i === 0) return 'no';
  }
  return 'yes';
};

const prime = () => {
  const gamerName = greeting();

  // start of the game
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let i = 0;
  let checking = true;

  // cycle for 3 attempts
  while (i < 3 && checking === true) {
    const x = Math.floor(Math.random() * 251);
    const correctAnswer = isPrime(x);

    // question
    console.log(`Question: ${x}`);
    const answer = readlineSync.question('Your answer: ');

    checking = check(gamerName, answer, correctAnswer);
    i += 1;
  }
  // if gamer gave 3 correct answer, he wins
  congrats(checking, gamerName);
};

export default prime;
