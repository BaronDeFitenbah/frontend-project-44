import getRandomInRange from '../utils.js';
import runEngine from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
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

  const randomizedNumber1 = getRandomInRange(1, 100);
  const randomizedNumber2 = getRandomInRange(1, 100);

  const question = `${randomizedNumber1} ${randomizedNumber2}`;
  const answer = String(findGcd(randomizedNumber1, randomizedNumber2));

  return [question, answer];
};

export default () => runEngine(rules, generateRound);
