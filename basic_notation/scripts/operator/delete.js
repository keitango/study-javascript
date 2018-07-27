// delete : オブジェクトのプロパティや配列の要素を削除する

// 配列の要素を削除する
let ary = ['G Gun', 'Gun W', 'Gun X'];
console.log(ary);
console.log("delete array element : " + delete ary[2]);
console.log(ary);

// オブジェクトのプロパティを削除する
let character = {most_pop : '💃', second_pop : 'シャア', third_pop : 'アムロ'};
console.log(character);
console.log("delete object property : " + delete character.most_pop);
console.log(character);
console.log("obj.first : " + character.most_pop);
let gundom = {pop_chara : character, broadcast_period : 39};
console.log(gundom);
console.log("delote object porpperty : " + delete gundom.pop_chara);
console.log(gundom);

// 明示された変数は削除できない
let ex_data = 114514;  // 明示的な宣言
im_data = 810;  // 非明示的な宣言
console.log("delete explicitly declared variable : " + delete ex_data);
console.log("delete implicitly declared variable : " + delete im_data);
console.log("explicitly declared variable : " + ex_data);
console.log("implicitly declared variable : " + im_data);
