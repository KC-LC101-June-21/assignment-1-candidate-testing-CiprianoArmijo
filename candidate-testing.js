const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let questions = [ "Who was the first American woman in space? ", "True or false: 5 kilometers == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];
let question = "";
let correctAnswer = "";
let candidateAnswer = "";
let passFail = '';
let grade = 0;
let counter = 0;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question('What is your name? ');
  //console.log("Hello " + candidateName);
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < questions.length; i++) {
    candidateAnswers[i] = input.question(questions[i]);
  } 
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  //console.log(candidateAnswers);
  console.log(`Candidate Name: ${candidateName}`);
  for (let i = 0; i < questions.length; i++) {
    console.log(`${questions[i]} 
    Your answer: ${candidateAnswers[i]}
    Correct Answer: ${correctAnswers[i]}`);
  

    if(candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      grade += 20;
      counter += 1;
      if(grade >= 80) {
        passFail = 'PASSED!';
      } else {
        passFail = 'FAILED';
      }
    } 
  }
  console.log(`>>> Overall Grade: ${grade}% (${counter} of 5 responses correct <<<
    >>> Status: ${passFail} <<<`);
    console.log(typeof grade);
  
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Hello " + candidateName);
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};