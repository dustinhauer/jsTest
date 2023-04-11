/*
function cutPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);

  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
  return juice;
}
console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
  return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }

}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1970, 'Mike'));


const calcAvg = (a, b, c) => (a + b + c) / 3;
console.log(calcAvg(3,4,5));

let scoreDolph = calcAvg(44,27,71);
let scoreKoa = calcAvg(65,54,49);
console.log(scoreDolph, scoreKoa);

const checkWinner = function(avgDolph, avgKoa)
{
  if (avgDolph >= 2 * avgKoa) {
    console.log(`Dolphins win trophy (${avgDolph} vs. ${avgKoa})`);
  }else if (avgKoa >= 2 * avgDolph) {
    console.groupCollapsed(`Koalas with trophy`);
  }else{
    console.log('No team wins...');
}
}
checkWinner(scoreDolph, scoreKoa);
//test 2
scoreDolph = calcAvg(85,54,41);
scoreKoa = calcAvg(23,34,27);
console.log(scoreDolph, scoreKoa);
checkWinner(scoreDolph, scoreKoa);



const friends = ['Michael', 'Steven', 'Peter'];

//add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

//add elements
friends.pop(); //last
friends.pop(); //last
console.log(friends);

friends.shift(); //first
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('Steven'));

if(friends.includes('Steven')) {
  console.log(`you have a friend named Peter`);
}

*/
/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44]; //arrays, use brackets

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2], ]
console.log(bills, tips, totals);



const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven',]
];
*/
// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   age: 2037-1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven',]
// };

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// const interestedIn = prompt('What do you wnat to know about Jonas? Choose between firstName, lastName, age, job and friends');
// console.log(jonas[interestedIn]);

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log('Wrong request! Choose between firstName, lastName, age, job and friends');  
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);

// //challenge
// //
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);








