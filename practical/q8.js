const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function UserInput() {
    rl.question("Enter the array of numbers separated by space: ", (input) => {
        const arr = input.trim().split(' ').map(Number);
        console.log("Original Array:", arr);

        // I. Increment every array element by 2 and print
        const incrementedArray = arr.map(num => num + 2);
        console.log("I. Incremented Array:", incrementedArray);

        // II. Decrement every array element by 2 and print
        const decrementedArray = arr.map(num => num - 2);
        console.log("II. Decremented Array:", decrementedArray);

        // III. Square every array element
        const squaredArray = arr.map(num => num * num);
        console.log("III. Squared Array:", squaredArray);

        // IV. Reset every array element to 1
        const resetArray = arr.map(() => 1);
        console.log("IV. Reset Array:", resetArray);

        // V. Print Prime numbers in array
        console.log("V. Prime Numbers in Array:");
        arr.forEach(num => {
            if (isPrime(num)) {
                console.log(num);
            }
        });

        // VI. Print Check Even/Odd numbers in array
        console.log("VI. Even/Odd Check:");
        arr.forEach(num => {
            if (num % 2 === 0) {
                console.log(num + " is Even");
            } else {
                console.log(num + " is Odd");
            }
        });

        // VII. Check Palindrome numbers in array
        console.log("VII. Palindrome Check:");
        const arrayString = arr.join('');
        if (isPalindrome(arrayString)) {
            console.log("The entire array is a palindrome");
        } else {
            console.log("The entire array is not a palindrome");
        }

        // VIII. Compute Factorial of numbers in array
        console.log("VIII. Factorial:");
        arr.forEach(num => {
            console.log("Factorial of", num, "is", factorial(num));
        });

        // IX. Remove first element from array
        const removedFirst = arr.slice(1);
        console.log("IX. Array after removing first element:", removedFirst);

        // X. Insert two elements at second position
        const insertedArray = [...arr.slice(0, 2), 100, 200, ...arr.slice(2)];
        console.log("X. Array after inserting two elements at second position:", insertedArray);

        rl.close();
    });
}

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

function factorial(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

UserInput();
