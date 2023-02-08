import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const gamerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${gamerName}!`);
  return gamerName;
};

export const check = (gamersName, ans, correctA) => {
  if (ans === correctA) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${ans}' is wrong answer ;(. Correct answer was '${correctA}'.\nLet's try again, ${gamersName}!`);
  return false;
};

export const congrats = (checking, gamersName) => {
  if (checking === true) console.log(`Congratulations, ${gamersName}!`);
};
