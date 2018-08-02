var data = "global data"; 　// 変数としてのdata
var obj1 = {data : "obj1 data"};  // obj1のメンバとしてのdata
var obj2 = {data : "obj2 data"};  // obj2のメンバとしてのdata

function showData(){
  console.log(this.data);  // 指定がなければ関数内のthisはグローバルオブジェクトを指す
}

showData.call();  // global data
showData.call(null);  // global data（引数にnullが渡された場合，暗黙的にグローバルオブジェクトを渡すを見なされる）
showData.call(obj1);  // obj1 data
showData.call(obj2);  // obj2 data
