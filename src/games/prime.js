import getRandomInRange from '../utils.js';
import runEngine from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRound = () => {
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

  const question = getRandomInRange(1, 252);
  const answer = isPrime(question);

  return [question, answer];
};

export default () => runEngine(rules, generateRound);
