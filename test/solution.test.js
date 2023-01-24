const findStudentScoreByName = require("../src/solution");
const expect = require("chai").expect;

// Write your tests here!
describe("findStudentScoreByName", () => {
  it("It should return a number when a correct student name is given", () => {
    const students = [
      { name: "Leo Yeon-Joo", score: 8.9 },
    ];
    const expected = 8.9;
    const actual = findStudentScoreByName("Leo Yeon-Joo");
    expect(actual).to.equal(expected);
  });
});
