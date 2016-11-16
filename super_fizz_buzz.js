var numbers = [];

for (var i = 1; i <= 1000; i++) {numbers.push(i);}

numbers.forEach(function (number){
  if (number % 105 === 0) {
    console.log("SuperFizzBuzz");
  }
  else if (number % 21 === 0) {
    console.log("SuperFizz");
  }
  else if (number % 35 === 0) {
    console.log("SuperBuzz");
  }
  else if (number % 15 === 0) {
    console.log("FizzBuzz");
  }
  else if (number % 3 === 0) {
    console.log("Fizz");
  }
  else if (number % 5 === 0) {
    console.log("Buzz");
  }
  else if (number % 7 === 0) {
    console.log("Super");
  }
  else {
    console.log(number)
  }
  });
