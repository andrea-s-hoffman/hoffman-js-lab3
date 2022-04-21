"use strict";

// 1.
const submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];

// const addSubmission = (array, newName, newScore, newDate) => {
//   let newPassedProperty;
//   if (newScore >= 60) {
//     newPassedProperty = true;
//   } else {
//     newPassedProperty = false;
//   }
//   const newSubmission = {
//     name: newName,
//     score: newScore,
//     date: newDate,
//     passed: newPassedProperty,
//   };
//   array.push(newSubmission);
// };

// 2.
const addSubmission = (array, newName, newScore, newDate) => {
  array.push({
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  });
};

addSubmission(submissions, "Mo", 71, "2022-04-20");
console.log(submissions);

// 3.
const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

deleteSubmissionByIndex(submissions, 1);
console.log(submissions);

// 4.
const deleteSubmissionByName = (array, nameParam) => {
  const index = array.findIndex((item) => {
    return item.name === nameParam;
  });
  array.splice(index, 1);
};

deleteSubmissionByName(submissions, "Jill");
console.log(submissions);

// 5. no loop needed
