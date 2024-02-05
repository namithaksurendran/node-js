const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    return 'Cannot divide by zero';
  }
  return num1 / num2;
}

function displayMenu() {
  console.log('Simple Calculator');
  console.log('1. Addition');
  console.log('2. Subtraction');
  console.log('3. Multiplication');
  console.log('4. Division');
  
}

function startCalculator() {
  displayMenu();
  rl.question('Enter your choice (1-5): ', (choice) => {
    if (choice === '5') {
      console.log('Goodbye!');
      rl.close();
    } else if (choice >= '1' && choice <= '4') {
      rl.question('Enter the first number: ', (num1) => {
        rl.question('Enter the second number: ', (num2) => {
          num1 = parseFloat(num1);
          num2 = parseFloat(num2);

          switch (choice) {
            case '1':
              console.log(`Result: ${num1} + ${num2} = ${add(num1, num2)}`);
              break;
            case '2':
              console.log(`Result: ${num1} - ${num2} = ${subtract(num1, num2)}`);
              break;
            case '3':
              console.log(`Result: ${num1} * ${num2} = ${multiply(num1, num2)}`);
              break;
            case '4':
              console.log(`Result: ${num1} / ${num2} = ${divide(num1, num2)}`);
              break;
          }

          startCalculator();
        });
      });
    } else {
      console.log('Invalid choice. Please enter a number between 1 and 5.');
      startCalculator();
    }
  });
}

startCalculator();