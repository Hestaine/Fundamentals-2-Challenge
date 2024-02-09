"use strict";
/*
// Challenge 1
const clacAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgDolphins1 = clacAverage(44, 23, 71);
const avgKoalas1 = clacAverage(65, 54, 49);
const avgDolphins2 = clacAverage(85, 54, 41);
const avgKoalas2 = clacAverage(23, 24, 27);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
  } else if (avgKoalas >= avgDolphins * 2) {
    return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
  } else {
    return `Sorry no one wins (${avgDolphins} vs. ${avgKoalas})`;
  }
};

console.log(checkWinner(avgDolphins1, avgKoalas1));
console.log(checkWinner(avgDolphins2, avgKoalas2));

// Challenge 2
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills);
console.log(tips);
console.log(totals);

// Challenge 3
const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};

mark.calcBMI();
john.calcBMI();

console.log(mark.calcBMI());
console.log(john.calcBMI());

if (mark.calcBMI() > john.calcBMI()) {
  console.log(
    `${mark.firstName} ${
      mark.lastName
    }'s BMI (${mark.calcBMI()}) is higher than ${john.firstName} ${
      john.lastName
    }'s BMI (${john.calcBMI()})`
  );
} else {
  console.log(
    `${john.firstName} ${
      john.lastName
    }'s BMI (${john.calcBMI()}) is higher than ${mark.firstName} ${
      mark.lastName
    }'s BMI (${mark.calcBMI()})`
  );
}

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// mark.calcBMI();
// john.calcBMI();

// console.log(mark.bmi);
// console.log(john.bmi);

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`
//   );
// } else {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`
//   );
// }
*/
