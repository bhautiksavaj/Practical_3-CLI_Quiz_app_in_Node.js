const readlineSync = require("readline-sync");
const chalk = require("chalk");

console.log(chalk.green.bold("Welcome to The Quiz!!!\n"));
let username = readlineSync.question("What's your Name: \n");
console.log("Hello", username, ", Let's Play the Quiz!!");

console.log("\n");
console.log("Rules & Instructions: ");
console.log(
  "1.",
  username + ", There are 7 Questions on node js all are Compulsory."
);
console.log("2. You will get 5 points on each Right Answer.");
console.log("3. 2 Point will be deducted if the Answer is Wrong.");
console.log(
  "4. In MCQ based questions you have to type the Serial Number / Index Value."
);
console.log("\n");

var mcqList = [
  {
    array: ["os module", "fs module", "path module", "None of the above"],
    question:
      "Which of the following module is required for path specific operations?",
    answer: "path module",
  },
  {
    array: ["$ node", "$ node start", "$ node repl", "$ node console"],
    question: "Which of the following command is used to start a REPL session?",
    answer: "$ node",
  },
  {
    array: ["JavaScript", "C and C++", "CoffeeScript", "All of the above"],
    question: "in which language is Node.js written?",
    answer: "All of the above",
  },
  {
    array: [".js", ".node", ".java", ".txt"],
    question:
      "Which of the following extension is used to save the Node.js files?",
    answer: ".js",
  },
  {
    array: ["expose", "Module", "exports", "All of the above"],
    question: "The Node.js modules can be exposed using:",
    answer: "exports",
  },
  {
    array: ["zlib", "https", "dgram", "fsread"],
    question: " Which of the following module is not a built-in node module?",
    answer: "fsread",
  },
  {
    array: ["File Service", "File System", "File Store", "File Sharing"],
    question: "What does the fs module stand for?",
    answer: "File System",
  },
];

let score = 0;
function quiz(question, answer) {
  let userAnswer = readlineSync.question(question);

  if (userAnswer.toLowerCase() == answer.toLowerCase()) {
    console.log("You are Right.");
    score = score + 5;
  } else {
    console.log("You are Wrong.");
    console.log("The Correct Answer is:", answer);
    score = score - 2;
  }

  if (score < 0) {
    score = 0;
  }
  console.log(chalk.cyan("Score is: ", score));
}

function quizMcq(listOfAnswers, question, answer) {
  console.log(question);
  let userAnswer = readlineSync.keyInSelect(listOfAnswers);
  console.log("\n");
  if (listOfAnswers[userAnswer] === answer) {
    console.log("You are Right.");
    score = score + 2;
  } else {
    console.log("You are Wrong.");
    console.log("The Correct Answer is: ", answer);
    score = score - 1;
  }

  if (score < 0) {
    score = 0;
  }
  console.log("Score is: ", score);
}

for (var i = 0; i < mcqList.length; i++) {
  console.log("\n");
  quizMcq(mcqList[i].array, mcqList[i].question, mcqList[i].answer);
  console.log("*******************************");
}

console.log("\n");
console.log("Congratulations,", username, "your Total Score is: ", score);
