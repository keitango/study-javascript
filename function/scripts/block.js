if(true){ var i = 5; }  // var
console.log(i);  // 5

if(true){ let j = 5; }  // let (ES2015)
try{
  console.log(j);  // error (j is not defined)
}catch(e){
  console.log(e.message);
}

//即時関数でブロックスコープを作る
(function(){
  var k = 5;
}).call(this);

try{
  console.log(k);  // errror
}catch(e){
  console.log(e.message);  // error (k is not defined)
}
