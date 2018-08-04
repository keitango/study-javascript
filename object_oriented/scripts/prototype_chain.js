var Area = function(){};  // コンストラクタ

Area.version = 2.0;  // 静的プロパティを定義

// 静的メソッドを定義
Area.triangle = function(base, height){
  return base * height / 2;
}

console.log("version or Area Class : " + Area.version);
var h = 10;
var b = 5;
console.log("area of triangle (b:%d, h:%d) : " + Area.triangle(b,h), b, h);

var a = new Area();  // インスタンス化
console.log("version or Area Class : " + a.version);  // undefined
try{
  console.log("version or Area Class : " + a.triangle(b,h));
}catch(e){
  console.error(e.message);  // not function
}
