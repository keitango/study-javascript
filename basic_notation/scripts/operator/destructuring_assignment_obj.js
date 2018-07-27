// オブジェクトの分割
var vrains = {
  title : "遊○王Vrains",
  broadcaster : "テレ●東京",
  production : "ぎ△ろっぷ"
}
var {broadcaster, title, rating_avg = "1.0%"} = vrains;  // 変数の並びはプロパティと異なってもいい，分解しないプロパティがあってもいい
console.log(broadcaster);
console.log(title);
console.log(rating_avg);

// プロパティと異なる変数名に割り当て分割する
var {title : name, production : studio} = vrains;  // 変数の並びはプロパティと異なってもいい，分解しないプロパティがあってもいい
console.log(name);
console.log(studio);

// 入れ子オブジェクトの分解
var arcv = {
  title : "遊戯★Arc-V",
  broadcaster : "💃レビ東京",
  production : "ぎゃ◇っぷ",
  character :
    {
      hero : "🍅 < れでぃ〜すえ〜んじぇんとるめ〜ん",
      heroine : "yz",
      garbage : "ys < yurusu"
    }
  }
var { character : {hero, heroine}, character : {garbage} } = arcv;
console.log(hero);
console.log(heroine);
console.log(garbage);
