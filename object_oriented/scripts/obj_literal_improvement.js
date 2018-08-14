// オブジェクトリテラルでメソッドを定義
let member = {
  name : 'uehara',
  birth : new Date(1975,3,3),  // 月は0からはじまる
  toString(){
    return 'name : ' + this.name + ' / birth : ' + this.birth.toLocaleDateString();
  }
};

console.log(member.birth);
console.log(member.toString());
