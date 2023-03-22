import getRandomInRange from '../utils.js';
import runEngine from '../index.js';

const rules = 'What number is missing in the progression?';

const generateRound = () => {
  // first number of progression starts in range from 1 to 10
  let start = getRandomInRange(1, 10);
  // min step between numbers is 2 and max value is 7
  const progressionStep = getRandomInRange(2, 7);
  // min amount of numbers in progression is 5 and max is 10
  const arrayLength = getRandomInRange(5, 10);
  const arrayOfProgression = [];
  // fill the array
  for (let index = 0; index < arrayLength; index += 1) {
    arrayOfProgression[index] = start;
    start += progressionStep;
  }

  const serialNumberOfHiddenNumber = getRandomInRange(0, arrayLength - 1);
  const answer = String(arrayOfProgression[serialNumberOfHiddenNumber]);

  arrayOfProgression[serialNumberOfHiddenNumber] = '..';
  const question = arrayOfProgression.join(' ');

  return [question, answer];
};

export default () => runEngine(rules, generateRound);
