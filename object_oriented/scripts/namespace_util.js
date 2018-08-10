// 名前空間を登録する関数
var registerNamespace　= (ns) => {  // ns = 'Keigango.Test.App'
  var names = ns.split(".");  // names = ["Keitango", "Test", "App"]
  var parent = window;  // 親オブジェクトを最上位のGlobalオブジェクト（ブラウザ環境ではwindow）で初期化
                        // parent = Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}

  for(var i = 0, len = names.length; i < len; i ++){
    parent[names[i]] = parent[names[i]] || {};  // parent[name[i]]が未定義の場合，空のオブジェクトを作成する
    parent = parent[names[i]];
  }

  return parent;
}

var myns = registerNamespace("Keitango.Test.App");
myns.Person = function(){};
var p = new myns.Person();
console.log(p instanceof Keitango.Test.App.Person);
