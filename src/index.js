import readlineSync from 'readline-sync';

export const getUsername = () => {
  console.log('Welcome to the Brain Games!');
  const gamerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${gamerName}!`);
  return gamerName;
};

export const doQuestionGetAnswer = (question) => {
  console.log(`Question: ${question}`);
  const gamerAnswer = readlineSync.question('Your answer: ');
  return gamerAnswer;
};

export const getRandomNumber = (range) => Math.floor(Math.random() * range);

export const isTrue = (gamerName, gamerAnswer, correctAnswer) => {
  if (gamerAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${gamerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${gamerName}!`);
  return false;
};

export const congrats = (checking, gamersName) => {
  if (checking === true) console.log(`Congratulations, ${gamersName}!`);
};
