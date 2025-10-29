const readline= require('readline');

const r1= readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function footToinch(ft){
    return ft*12;
}

function inchTofoot(inc){
    return inc/12;
}

function UserInput(){
    r1.question('Enter the value in Foot: ',(ft)=>{
        const inc=footToinch(parseFloat(ft));
        console.log(`${ft} Foot = ${inc} Inches`);
    r1.question('Enter the value in Inches: ',(inc)=>{
        const ft=inchTofoot(parseFloat(inc));
        console.log(`${inc} Inches = ${ft} Foot`)
        r1.close();
    });
    });    
}

module.exports= UserInput; 