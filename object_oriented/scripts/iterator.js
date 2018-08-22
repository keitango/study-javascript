let data_ary = ['one', 'two', 'tree'];
let data_str = '114514';
let data_map = new Map([['Mon','月曜日'], ['Tue', '火曜日'], ['Wen', '水曜日']]);

for(let d of data_ary){
  console.log(d);
}

for(let d of data_str){
  console.log(d);
}

for(let [key, value] of data_map){
  console.log(key + ' : ' + value);
}
