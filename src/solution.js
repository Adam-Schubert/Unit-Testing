/*
  Write a function that returns a particular student's score when given a name. If no name matches, return `null`.
*/

function findStudentScoreByName(students = [], name = "") { // Takes in a students array and a name as a string with the format "First Last"
  let score = null;
  students.forEach(student => {
    if (student.name === name) {
      score += student.score;
    }
  })
  return score; 
}

module.exports = findStudentScoreByName;
