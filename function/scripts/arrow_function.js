let decideLeapYear = (year) => {
  if(year % 4 == 0　&& (year % 100 != 0 || year % 400 == 0)){
    return true;
  }else{
    return false;
  }
}
console.log(decideLeapYear(1900));
console.log(decideLeapYear(1904));

// 省略形
let getTriangle = (base, height) => base * height / 2;
console.log(getTriangle(2,5));

// オブジェクトリテラルを返す
let getObj = () => ({hero : "🍅"});
console.log(getObj());  // {hero : "🍅"}

let getObj_ng = () => {hero : "🍅"};
console.log(getObj_ng());  // undefined
