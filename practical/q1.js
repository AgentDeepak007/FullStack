const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function number_count(a) {
    let count = {};
    if (isNaN(a)) {
        console.log('The entered value is not a number!!!');
    } else {
        a = a.toString(); // Convert to string to iterate over each digit
        // Count the occurrence of each digit
        for (let i = 0; i < a.length; i++) {
            const digit = a[i];
            count[digit] = (count[digit] || 0) + 1;
        }
        
        // Output the result
        console.log('Occurrences of digits:');
        for (let digit in count) {
            console.log(`${digit}: ${count[digit]}`);
        }
    }
    return count; // Return the count object
}

function UserInput() {
    rl.question("Enter the number: ", (a) => {
        const nc = number_count(parseInt(a));
        console.log(nc);
        rl.close(); // Close readline after processing input
    });
}

UserInput();