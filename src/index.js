import readlineSync from 'readline-sync';

const roundsCount = 3;

const runEngine = (rules, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const gamerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${gamerName}!`);
  console.log(rules);

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < roundsCount; i++) {
    const [question, answer] = generateRound();
    console.log(`Question: ${question}`);
    const gamerAnswer = readlineSync.question('Your answer: ');

    if (gamerAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${gamerAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${gamerName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${gamerName}!`);
};

export default runEngine;
