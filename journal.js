// Greet a user by name
function greet(name) {
    return "Hello " + name + "!";
}

// Print the bigger number
function biggerNum(num1, num2) {
    if (num1 > num2) {
        return (`${num1} is the bigger number!`);
    } else if (num1 < num2) {
        return (`${num2} is the bigger number!`);
    } else {
        return (`${num1} and ${num2} are equal!`);
    };
}
console.log(biggerNum(22, -7));
console.log(biggerNum(27, 27));
console.log(biggerNum(66, 147));