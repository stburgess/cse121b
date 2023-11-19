
const arr = ["one", "two", "three"];

const arrHtml = arr.map(function (item) {
    return `<li>${item}</li>`;
});
document.getElementById("myList").innerHTML = arrHtml.join();

//

const letterGrades = ["A", "B", "A"];

function letterGradeToGP(grade) {
    let gp = 0;
    if (grade === "A") {gp = "4";} else if (grade = "B") {gp = "4";}
    return gp;
}

//

gradePoints = letterGrdes.map(letterGradeToGP);
gpa = gradePoints.reduce((totGp, gp) => totGp + gp / gradePoints.length);

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const filteredFruits = fruits.filter((fruit) => fruit.length > 6);

//

const numbers = [12, 34, 21, 54];
const luckNumber = 21;

indexOfLuckNum = numbers.indexOf(luckNumber);
