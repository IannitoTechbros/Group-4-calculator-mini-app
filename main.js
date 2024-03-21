const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculate() {
    rl.question("Enter the first number: ", function(num1) {
        num1 = parseFloat(num1);

        if (isNaN(num1)) {
            console.log("Invalid input. Please enter a valid number.");
            rl.close();
            return;
        }

        rl.question("Enter the second number: ", function(num2) {
            num2 = parseFloat(num2);

            if (isNaN(num2)) {
                console.log("Invalid input. Please enter a valid number.");
                rl.close();
                return;
            }

            rl.question("Enter the operation (+, -, *, /): ", function(operation) {
                let result;
                switch (operation) {
                    case "+":
                        result = num1 + num2;
                        break;
                    case "-":
                        result = num1 - num2;
                        break;
                    case "*":
                        result = num1 * num2;
                        break;
                    case "/":
                        if (num2 === 0) {
                            console.log("Cannot divide by zero.");
                            rl.close();
                            return;
                        }
                        result = num1 / num2;
                        break;
                    default:
                        console.log("Invalid operation. Please enter +, -, *, or /.");
                        rl.close();
                        return;
                }

                console.log(`The result of ${num1} ${operation} ${num2} is: ${result}`);
                rl.close();
            });
        });
    });
}

calculate();
