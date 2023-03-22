import getRandomInRange from '../utils.js';
import runEngine from '../index.js';

const rules = 'What is the result of the expression?';

const generateRound = () => {
  const arrayOfOperations = ['*', '+', '-'];

  const operator = arrayOfOperations[getRandomInRange(0, 2)];
  const randomNum1 = getRandomInRange(1, 30);
  const randomNum2 = getRandomInRange(1, 30);

  const question = `${randomNum1} ${operator} ${randomNum2}`;

  let answer = '';
  switch (operator) {
    case '*':
      answer = String(randomNum1 * randomNum2);
      break;
    case '+':
      answer = String(randomNum1 + randomNum2);
      break;
    case '-':
      answer = String(randomNum1 - randomNum2);
      break;
    default:
      answer = '0';
  }

  return [question, answer];
};

export default () => runEngine(rules, generateRound);
