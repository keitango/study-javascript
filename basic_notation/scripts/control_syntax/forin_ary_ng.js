// for in : 配列における拡張機能の列挙

console.log("\nfor in : 配列における拡張機能の列挙");
let noharake = ["shinnosuke", "hirosshi", "misae", "himawari", "shiro"];
// 配列オブジェクトに拡張機能を追加
Array.prototype.hoge = function(){};

for(let i in noharake){
    console.log(i + " : " + noharake[i]);
}
