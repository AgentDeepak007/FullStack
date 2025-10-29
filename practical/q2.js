const readline=require('readline');

const r1=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function UserInput() {
    r1.question("Enter the string: ", (a) => {
        const cc = character_count(a);
        console.log(cc);
        r1.close(); // Close readline after processing input
    });
}

function character_count(a)
{
    let count={};

        a = a.toString(); 
        for (let i = 0; i < a.length; i++) {
            const char = a[i];
            count[char] = (count[char] || 0) + 1;
        }
        
        // Output the result
        console.log('Occurrences of charcter:');
        for (let char in count) {
            console.log(`${char}: ${count[char]}`);
        }

    return count; // Return the count object
}

UserInput();
