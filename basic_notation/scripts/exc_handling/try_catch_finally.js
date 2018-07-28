let x;
try{
    x *= y;
    console.log(x);
}catch(e){
    console.log(e.message);
}finally{
    console.log("処理は終了しました");
}
