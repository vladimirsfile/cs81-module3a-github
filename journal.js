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

// Select the odd numbers
let oddNums = [];
function slectOddNum(numbers) {
    for (let number of numbers) {
        if (number % 2 !== 0) {
            oddNums.push(number);
        }
    }
    return oddNums;
}
let numbers = [22, 7, 223, 67, 0, 44, 17, 88];
console.log(slectOddNum(numbers));

// Get the initials 
function getInitials(firstName, lastName) {
    return (firstName[0] + "." + lastName[0] + ".");
}
const firstName = "Vladimir";
const lastName = "Angelov";

console.log(getInitials(firstName, lastName));

// Find the are of a rectangle
function areaRectangle(width, height) {
    return  width * height;
}
let width = 7;
let height = 22;

let area = areaRectangle(width, height);
console.log(area);