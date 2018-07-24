// 高階関数arrayOperateを定義
//   ary : 引数配列
//   callback : コールバック関数
function arrayOperate(ary, callback) {
  for (var key in ary) {
    callback(ary[key], key);
  }
}

// 配列の合計を格納するグローバル変数
sum = 0;

// 配列の要素を表示する関数
showElement = function(value, key){
  console.log(key + ':' + value);
}

// 要素を合計する関数
addElement = function(value, key){
  sum += value;
}

var ary = [1, 2, 4, 8, 16];
arrayOperate(ary, showElement);
arrayOperate(ary, addElement);
console.log('sum of array : ' + sum);
