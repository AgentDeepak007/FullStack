const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function kbTomb(kb) {
    
    return kb / 1024;
}

function mbTokb(mb) {
    
    return mb * 1024;
}

function convert() {
    r1.question('Enter value in kilobytes (Kb): ', (kb) => {
      const mb = kbTomb(parseFloat(kb));
      console.log(`${kb} Kb = ${mb} Mb.`);
      r1.question('Enter the value in megabytes(Mb)',(mb)=>{
        const kb = mbTokb(parseFloat(mb));
        console.log(`${mb} Mb = ${kb}`);
        r1.close();
    });
    });
  }

module.exports = convert;