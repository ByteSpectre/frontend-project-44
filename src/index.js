import readlineSync from 'readline-sync';

export const numberOfQuestions = 3;

export const gameEngine = (task, gameData) => {
  console.log('Welcome to the Brain-Games buddy!');
  const userName = readlineSync.question('What is your name? ');
  console.log(`Nice to meet you ${userName}!`);

  console.log(task);

  for (let i = 0; i < numberOfQuestions; i += 1) {
    const [question, correctAnswer] = gameData[i];

    console.log(question);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is a wrong answer (╯︵╰,) ... Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};
