const readline= require('readline');

const r1= readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function aTosq(a){
    return a*43560 ;
}

function sqToa(sq){
    return sq/43560;
}

function UserInput(){
    r1.question('Enter the value in Acre:  ',(a)=>{
        const sq=aTosq(parseFloat(a));
        console.log(`${a} Acre = ${sq} Square Foot`);
    r1.question('Enter the value in Square Foot: ',(sq)=>{
        const a=sqToa(parseFloat(sq));
        console.log(`${sq} SquareFoot = ${a} Acre`)
        r1.close();
    });
    });    
}

module.exports= UserInput;