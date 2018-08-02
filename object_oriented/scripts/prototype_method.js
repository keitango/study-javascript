// オブジェクトのメソッドをprototypeプロパティに追加する
// prototypeプロパティは空のブジェクトを参照する
// prototypeプロパティに追加されたメンバは，クラスを元に生成されたすべてのインスタンスから利用できる
//   フィールド : インスタンスごとに別の値を持つ -> コンストラクタで定義
//   メソッド : 基本的に全インスタンスで共通 -> オブジェクトのprototypeに

var Robot = function(name, height_m, weight_t, power_kw){
  // フィールドはコンストラクタで定義
  this.name = name;
  this.height_m = height_m;
  this.weight_t = weight_t;
  this.power_kw = power_kw;
}

// メソッドはprototypeに追加
Robot.prototype.getName = function(){
  return this.name;
}

var zaku2 = new Robot("zakuⅡ FZ", 17.5, 74.5, 976);
console.log("name : " + zaku2.getName());
