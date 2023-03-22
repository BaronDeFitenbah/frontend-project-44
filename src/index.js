import readlineSync from 'readline-sync';
// import getRandomInRange from 'utils.js';


const roundsCount = 3;

export const runEngine = (rules, generateRound) => {
  
  
  console.log('Welcome to the Brain Games!');
  const gamerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${gamerName}!`);
  
  console.log(rules);
  
  for (let i = 0; i < roundsCount; i ++) {
    //generateRound
    conts [question, answer] = generateRound();
    
  }
  
  
};


