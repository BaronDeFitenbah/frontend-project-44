import {
  getUsername,
  doQuestionGetAnswer,
  getRandomNumber,
  isTrue,
  congrats,
} from '../index.js';

const isPrime = (number) => {
  // here we could add more checks like number % 5
  // but have no needs as our range of numbers is small (aren't we?..)
  if (number < 4) return 'yes';
  if (number % 2 === 0) return 'no';
  for (let divider = 2; divider <= (number / 2); divider += 1) {
    if (number % divider === 0) return 'no';
  }
  return 'yes';
};

const isPrimeNumber = () => {
  const gamerName = getUsername();
  // start of the game
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let attemptCount = 0;
  let isResultTrue = true;
  // cycle for 3 attempts
  while (attemptCount < 3 && isResultTrue === true) {
    const randomizedNumber = getRandomNumber(252);
    const correctAnswer = isPrime(randomizedNumber);
    // ask the gamer
    const gamerAnswer = doQuestionGetAnswer(randomizedNumber);
    // and check if he is right
    isResultTrue = isTrue(gamerName, gamerAnswer, correctAnswer);
    attemptCount += 1;
  }
  // congratulate if he wins after 3 attempts
  congrats(isResultTrue, gamerName);
};

export default isPrimeNumber;
