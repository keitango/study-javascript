let i, j;
i = 100;
j = 0;
try{
    if(j === 0){
        throw new Error("0除算");
    }
    let k = i / j;
}catch(e){
    console.log(e.message);
}
