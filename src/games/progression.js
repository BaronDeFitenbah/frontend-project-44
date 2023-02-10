import {
  getUsername,
  doQuestionGetAnswer,
  getRandomNumber,
  isTrue,
  congrats,
} from '../index.js';

const getRandomProgressionInArray = () => {
  // first number of progression starts in range from 1 to 15
  let start = 1 + getRandomNumber(15);
  // min step between numbers is 2 and max value is 7
  const progressionStep = 2 + getRandomNumber(6);
  // min amount of numbers in progression is 5 and max is 10
  const arrayLength = 5 + getRandomNumber(10);
  const arrayOfProgression = [];
  // fill the array
  for (let index = 0; index < arrayLength; index += 1) {
    arrayOfProgression[index] = start;
    start += progressionStep;
  }
  return arrayOfProgression;
};

const progression = () => {
  const gamerName = getUsername();
  // start of the game
  console.log('What number is missing in the progression?');
  let attemptCount = 0;
  let isResultTrue = true;
  // cycle for 3 attempts
  while (attemptCount < 3 && isResultTrue === true) {
    const currentProgression = getRandomProgressionInArray();
    const serialNumberOfHiddenNumber = getRandomNumber(currentProgression.length);
    const correctAnswer = String(currentProgression[serialNumberOfHiddenNumber]);
    currentProgression[serialNumberOfHiddenNumber] = '..';
    // ask the gamer
    const question = currentProgression.join(' ');
    const gamerAnswer = doQuestionGetAnswer(question);
    // and check if he is right
    isResultTrue = isTrue(gamerName, gamerAnswer, correctAnswer);
    attemptCount += 1;
  }
  // congratulate if he wins after 3 attempts
  congrats(isResultTrue, gamerName);
};

export default progression;
