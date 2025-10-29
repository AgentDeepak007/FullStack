var n = 5;
str="-NASTOV03-YADAV-";
var c = 0;
for(let i=0;i<n;i++){
    for(let j=n-1;j>i;j--){
       process.stdout.write("  "); 
    }
    for(let k=0;k<i+1;k++){
       process.stdout.write(" "+str[c]+"  ");
       c++;
    }
    process.stdout.write("\n");
}
