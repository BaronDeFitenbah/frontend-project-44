import readlineSync from 'readline-sync';

const getUsername = () => {
  console.log('Welcome to the Brain Games!');
  const gamerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${gamerName}!`);
};

export default getUsername;
