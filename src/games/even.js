import getRandomInRange from '../utils.js';
import runEngine from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const question = getRandomInRange(1, 100);
  const answer = question % 2 ? 'no' : 'yes';
  return [question, answer];
};

export default () => runEngine(rules, generateRound);
