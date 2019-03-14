---
for (var i = 0; i < 10; i++) {
     // log the numbers 0 through 9
     console.log(i)
   }

function power(num, exp) {
  var result = 1;
  for (var i = 1; i < exp; i++) {
    result *= num;
  }
  return result;
}
---
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var filtered = numbers.filter(function evenNumbers (number) {
	return number % 2 === 0;
});
console.log(filtered);

---

//accepting numberOfRolling = defined by the player
//store numberOfRolling so I can print tot console
???

//define max number = 6
var maxNumber = 6;


//use Math.random choose a number from maxNumber
var result = maxNumber.Math.random(function roll (num, exp) {
  var result1 =  ;
  for (var i = 0; i < 3; i++) {
    result *= num;
  }
});

//use Math.floor to round the randomNumber to smaller number

//Print Rolled + numberOfRolling + dice: + 3 results
console.log(Rolled numberOfRolling dice: result1, result2, result3);
