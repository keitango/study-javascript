let boueitai = ["shinnosuke", "toru", "masao", "nene", "bo-chan"];
// 配列オブジェクトに拡張機能を追加
Array.prototype.hoge = function(){};

for(person of boueitai){
    console.log(person);
}
