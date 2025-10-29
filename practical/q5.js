var n = 7;
for(let i=0;i<n;i++){
    for(let j=n-1;j>i;j--){
       process.stdout.write("  "); 
    }
    for(let l=i-1;l>0;l--){
        process.stdout.write(l+1+" "); 
    }
    for(let k=1;k<i+1;k++){
       process.stdout.write(k+" ");
    }
    process.stdout.write("\n");
}
