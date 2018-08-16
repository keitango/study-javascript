// オブジェクトリテラルでメソッドを定義
let member = {
  name : 'uehira',
  birth : new Date(1975,3,3),  // 月は0からはじまる
  toString(){
    return 'name : ' + this.name + ' / birth : ' + this.birth.toLocaleDateString();
  }
};
console.log(member.birth);
console.log(member.toString());

// 変数を同盟のプロパティに割り当てる
let name = 'kojiro';
let birth = new Date(1973,9,22);
let member2 = {name, birth};
console.log(member2);

// プロパティを動的に生成する
let i = 1;
let member3 = {
  name : 'matsuwaka',
  birth : new Date(1980,8,13),
  ['position' + i++] : 'starter',
  ['position' + i++] : 'reliever',
  ['position' + i++] : 'outfielder'
};
console.log(member3);
