// 例外処理のオーバーヘッド比較

let a = 1;
let b = 0;

// 例外処理をループ外に記述
console.time("no_exc_in_loop_time");
try{
    if(b === 0){
        throw new Error("0除算");　// ループの外で例外をスローする
    }
    for(let i = 0; i < 1000; i ++){
        a ++;
        let c = a / b;
    }
}catch(e){
    //console.log(e.message);
}
console.timeEnd("no_exc_in_loop_time");

// 例外処理をループ内に記述
a = 1;
console.time("exc_in_loop_time");
for(let i = 0; i < 1000; i ++){
    a ++;
    try{
        if(b === 0){
            throw new Error("0除算");  // ループの中で例外をスローする
        }
        let c = a / b;
    }catch(e){
        //console.log(e.message);
    }
}
console.timeEnd("exc_in_loop_time");
