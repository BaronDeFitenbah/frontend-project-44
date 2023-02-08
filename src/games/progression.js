/* eslint-disable import/no-unresolved */
import readlineSync from 'readline-sync';
import { greeting, congrats, check } from '../index.js';

const workOnProgression = () => {
  let start = Math.floor(Math.random() * 15);
  const arrStep = 1 + Math.floor(Math.random() * 6);
  const arrLength = 5 + Math.floor(Math.random() * 10);
  const arrOfProgression = [];

  for (let j = 0; j < arrLength; j += 1) {
    arrOfProgression[j] = start;
    start += arrStep;
  }
  return arrOfProgression;
};

const progression = () => {
  const gamerName = greeting();

  // start of the game
  console.log('What number is missing in the progression?');

  let i = 0;
  let checking = true;

  // cycle for 3 attempts
  while (i < 3 && checking === true) {
    const currentArray = workOnProgression();
    const serialNumber = Math.floor(Math.random() * currentArray.length);
    const correctAnswer = String(currentArray[serialNumber]);
    currentArray[serialNumber] = '...';

    // question
    console.log(`Question: ${currentArray.join(' ')}`);
    const answer = readlineSync.question('Your answer: ');

    checking = check(gamerName, answer, correctAnswer);
    i += 1;
  }
  // if gamer gave 3 correct answer, he wins
  congrats(i, gamerName);
};

export default progression;
