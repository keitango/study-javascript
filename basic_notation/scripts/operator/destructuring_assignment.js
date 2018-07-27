// 分割代入
var data = [1, 2, 3, 4, 5];
var [x_1, x_2, x_3, x_4, x_5] = data;
console.log(x_1);
console.log(x_2);
console.log(x_3);
console.log(x_4);
console.log(x_5);

// 分割代入で，残りの要素を配列として切り出す
var data2 = [1, 2, 3, 4, 5];
var [y_1, y_2, ...other] = data2;
console.log(y_1);
console.log(y_2);
console.log(other);
for(let i = 0, len = other.length; i < len; i ++){
  console.log(i + ":" + other[i]);
}
