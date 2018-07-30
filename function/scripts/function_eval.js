console.log("三角形の面積 : " + getTriangle(5,2));
try{
  console.log("BMI : " + getBMI(50,1.63));
}catch(e){
  console.log(e.message);
}

// function命令はコードを解析，コンパイルするタイミングで関数を登録する
function getTriangle(base, height){
  return base * height / 2;
}

// 関数リテラルとコンストラクタは，実行（代入時）に評価される
var getBMI = (weight, height) => {
  return weight / (height * height);
}

console.log("BMI : " + getBMI(50,1.63));
