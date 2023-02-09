import {
  getUsername,
  doQuestionGetAnswer,
  getRandomNumber,
  isTrue,
  congrats,
} from '../index.js';

const getOperation = () => {
  const arrayOfOperations = ['*', '+', '-'];
  const operation = arrayOfOperations[getRandomNumber(3)];
  return operation;
};

const getCorrectAnswer = (firstNumber, secondNumber, operation) => {
  let answer = '';
  switch (operation) {
    case '*':
      answer = String(firstNumber * secondNumber);
      break;
    case '+':
      answer = String(firstNumber + secondNumber);
      break;
    case '-':
      answer = String(firstNumber - secondNumber);
      break;
    default:
      answer = 0;
  }
  return answer;
};

const calculator = () => {
  const gamerName = getUsername();
  // start of the game
  console.log('What is the result of the expression?');
  let attemptCount = 0;
  let isResultTrue = true;
  // cycle for 3 attempts
  while (attemptCount < 3 && isResultTrue === true) {
    // randomizing
    const randomizedNumber1 = getRandomNumber(30);
    const randomizedNumber2 = getRandomNumber(30);
    const operation = getOperation(); // 'getOperation()' must be used once
    // and remembering correct answer
    const correctAnswer = getCorrectAnswer(randomizedNumber1, randomizedNumber2, operation);
    // ask the gamer
    const question = `${randomizedNumber1} ${operation} ${randomizedNumber2}`;
    const gamerAnswer = doQuestionGetAnswer(question);
    // and check if he is right
    isResultTrue = isTrue(gamerName, gamerAnswer, correctAnswer);
    attemptCount += 1;
  }
  // congratulate if he wins after 3 attempts
  congrats(isResultTrue, gamerName);
};

export default calculator;
