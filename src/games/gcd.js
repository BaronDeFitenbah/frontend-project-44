import {
  getUsername,
  doQuestionGetAnswer,
  getRandomNumber,
  isTrue,
  congrats,
} from '../index.js';

const findGcd = (firstNumber, secondNumber) => {
  let a = firstNumber;
  let b = secondNumber;
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
  const gamerName = getUsername();
  // start of the game
  console.log('Find the greatest common divisor of given numbers.');
  let attemptCount = 0;
  let isResultTrue = true;
  // cycle for 3 attempts
  while (attemptCount < 3 && isResultTrue === true) {
    // randomizing numbers
    const randomizedNumber1 = 1 + getRandomNumber(100);
    const randomizedNumber2 = 1 + getRandomNumber(100);
    const correctAnswer = String(findGcd(randomizedNumber1, randomizedNumber2));
    // ask the gamer
    const question = `${randomizedNumber1} ${randomizedNumber2}`;
    const gamerAnswer = doQuestionGetAnswer(question);
    // and check if he is right
    isResultTrue = isTrue(gamerName, gamerAnswer, correctAnswer);
    attemptCount += 1;
  }
  // congratulate if he wins after 3 attempts
  congrats(isResultTrue, gamerName);
};

export default gcd;
