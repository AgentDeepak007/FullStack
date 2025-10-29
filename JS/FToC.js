const readline= require('readline');

const r1= readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function fToc(f){
    return ((f-32)*5/9) ;
}

function cTof(c){
    return ((c*9/5) + 32);
}

function UserInput(){
    r1.question('Enter the value in Farenheit:  ',(f)=>{
        const c=fToc(parseFloat(f));
        console.log(`${f} Farenheit = ${c} Celcius`);
    r1.question('Enter the value in Celcius: ',(c)=>{
        const f=cTof(parseFloat(c));
        console.log(`${c} Celcius = ${f} Farenheit`)
        r1.close();
    });
    });    
}

module.exports= UserInput;