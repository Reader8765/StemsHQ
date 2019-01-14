//ALL QUIZDATAREADER CODE
var fs = require('fs');
var quizDataReader = {};

quizDataReader.addQuiz = (path, fileName) => {
  var quiz = {};
  var quizData = fs.readFileSync(path+'textData/'+fileName+'.txt', 'utf8');
  console.log(quizData);
  quizData = quizData.split("\n");
  for (question of quizData) {
    question = question.split(" ");
    quiz[question[0]] = question[1].split(",");
  }
  fs.writeFileSync(path+'objData/' + fileName + '.txt', JSON.stringify(quiz));
  return quiz;
}

quizDataReader.retrieveQuiz = (fileName) => {
  var quizData = fs.readFileSync('objData/' + fileName + '.txt', 'utf8');
  return JSON.parse(quizData);
}
//QUIZDATAREADER CODE END

module.exports= quizDataReader;
