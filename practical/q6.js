var n=6
for(let i=0;i<n;i++){
for(let s=n-1;s>i;s--){
process.stdout.write("  ");
}
let k=1
for(let j=0;j<=i;j++){
process.stdout.write(` `+k+`  `)
k=k*(i-j)/(j+1);
}
process.stdout.write("\n")
}
