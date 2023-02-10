import {
  getUsername,
  doQuestionGetAnswer,
  getRandomNumber,
  isTrue,
  congrats,
} from '../index.js';

const isEvenNumber = () => {
  // greeting and remember Username
  const gamerName = getUsername();
  // start of the game and rules
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let attemptCount = 0;
  let isResultTrue = true;
  // cycle for 3 attempts
  while (attemptCount < 3 && isResultTrue === true) {
    // randomizing a number
    const randomizedNumber = getRandomNumber(100);
    // and remembering correct answer
    const correctAnswer = randomizedNumber % 2 ? 'no' : 'yes';
    // ask the gamer
    const gamerAnswer = doQuestionGetAnswer(randomizedNumber);
    // and check if he is right
    isResultTrue = isTrue(gamerName, gamerAnswer, correctAnswer);
    attemptCount += 1;
  }
  // congratulate if he wins after 3 attempts
  congrats(isResultTrue, gamerName);
};

export default isEvenNumber;
