const readline=require('readline');

const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function UserInput()
{
    r1.question("Enter the string to perform operations: ", (a)=>{
        const {strrev,wordrev,charrev}=stringreverse(a);
        console.log("The Reverse of the String is: ",strrev);
        console.log("The Reverse of the String words is: ",wordrev);
        console.log("The Reverse of String characters is: ",charrev);
        r1.close();
    });
}

function stringreverse(str)
{
        const strrev=(str.split(' ').reverse().join(' '));
        const wordrev=(str.split(' ').map(word => word.split('').reverse().join('')).join(' '));
        const charrev=(str.split('').reverse().join(''));
        return {strrev,wordrev,charrev};
}

UserInput();