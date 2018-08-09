// closureを用いたプライベートメンバの定義

function Person(name){
  // パブリックプロパティ
  this.name = name;

  // プライベートプロパティ
  var _height;
  var _weight;

  // プライベートメソッド
  var _checkArgs = function(val){
    return (typeof val ==='number' && val >= 0);
  };

  // プライベートメンバにアクセスするメソッド
  this.setHeight  = function(height){
    _height = _checkArgs(height) ? height : _height;
  };
  this.getHeight  = function(){
    return _height;
  };
  this.setWeight = function(weight){
    _weight = _checkArgs(weight) ? weight : _weight;
  };
  this.getWeight = function(){
    return _weight;
  };

}

// パブリックメソッド
Person.prototype.getBMI = function(){
  try{
    if(this.getHeight() === undefined) throw new Error(this.name + "'s height is undefined !");
    if(this.getWeight() === undefined) throw new Error(this.name + "'s weight is undefined !");
    return this.getWeight() / (this.getHeight() * this.getHeight());
  }catch(e){
    console.error(e.message);
  }
};
Person.prototype.getStandardWeight = function(){
  try{
    if(this.getHeight() === undefined) throw new Error(this.name + "'s height is undefined !");
    return this.getHeight() * this.getHeight() * 22;
  }catch(e){
    console.error(e.message);
  }
};

var keitango = new Person('keitango');
console.log(keitango.name);
keitango._height = 1.84;
keitango._weight = 67;
console.log(keitango._height);  // 1.84
console.log(keitango.getHeight());  // undefined

console.log(keitango.getBMI());  // keitango's height is undefined !
console.log(keitango.getStandardWeight());  // keitango's height is undefined !

keitango.setHeight(1.84);
console.log(keitango.getBMI());  // keitango's weight is undefined !
console.log(keitango.getStandardWeight());  //74.48...

keitango.setWeight(67);
console.log(keitango.getBMI());  // 19. 78...
