/* eslint-disable import/no-extraneous-dependencies */
import readlineSync from 'readline-sync';

const evenNumber = () => {
  // greeting
  console.log('Welcome to the Brain Games!');
  const gamerName = readlineSync.question('May I have your name? ');
  // rules of the game
  console.log(`Hello, ${gamerName}!\nAnswer "yes" if the number is even, otherwise answer "no".`);
  // start of the game
  let i = 0;
  // cycle for 3 attempts
  for (i; i < 3; i += 1) {
    // randomizing a number
    const x = Math.floor(Math.random() * 100);
    // and remembering correct answer
    let correctAnswer = '';
    if (x % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    // question
    console.log(`Question: ${x}`);
    const answer = readlineSync.question('Your answer: ');
    // compare gamer's answer with the correct answer
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      // if gamer's anwer is wrong, break the cycle and say new try
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${gamerName}!`);
      break;
    }
  }
  // if gamer gave 3 correct answer, he wins
  if (i === 3) {
    console.log(`Congratulations, ${gamerName}!`);
  }
};

export default evenNumber;
