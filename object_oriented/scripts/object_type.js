// Personクラスを定義
var Person = function(name, age){
  this.name = name;
  this.age = age;
};

// プロトタイプにメソッドを定義
Person.prototype.getName = function(){
  return this.name;
};
Person.prototype.getAge = function(){
  return this.age;
};
Person.prototype.introduce = function(){
    console.log("私は" + this.getName() + ", " + this.getAge() + "歳です.");
};

// Playerクラスを定義
var Player = function(name, age, sport){
  Person.call(this, name, age);
  this.sport = sport;
};
Player.prototype = new Person();  // サブクラスのプロトタイプに，スーパークラスのインスタンスをセット

// プロトタイプにメソッドを定義
Player.prototype.getSport = function(){
    return this.sport;
};
Player.prototype.introduce = function(){  // オーバーロード
    console.log("私は" + this.getName() + ", " + this.getAge() + "歳で" + this.getSport() + "の選手です.");
};

// インスタンス生成
var takashi = new Person("takashi", 22);
var kojiro = new Player("kojiro", 45, "baseball");

// 元となるコンストラクタを取得する
console.log(takashi.constructor === Person);  // true
console.log(kojiro.constructor === Person);  // true
console.log(kojiro.constructor === Player);  // false（Prototype継承している場合は，constructorプロパティは継承元のクラスを示す）

// オブジェクトが参照しているプロトタイプを確認
console.log(Person.prototype.isPrototypeOf(takashi));  // true
console.log(Player.prototype.isPrototypeOf(takashi));  // false
console.log(Player.prototype.isPrototypeOf(kojiro))  // true

// メンバーの有無を判定する
console.log('getName' in kojiro)  // true
console.log('hogahoge' in kojiro)  // false
