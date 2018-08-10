class Person{

  // コンストラクタ
  constructor(name, height, weight){
    this.name = name;
    this.height = height;
    this.weight = weight;
  }

  // set/getでプロパティを設定
  set name(val){
    this._name = val;
  }
  get name(){
    return this._name;
  }

  set height(val){
    this._height = val;
  }
  get height(){
    return this._height;
  }

  set weight(val){
    this._weight = val;
  }
  get weight(){
    return this._weight;
  }

  getBMI(){
    try{
      if(this.height === undefined) throw new Error(this.name + "'s height is undefined !");
      if(this.weight === undefined) throw new Error(this.name + "'s weight is undefined !");
      return this.weight / (this.height * this.height);
    }catch(e){
      console.error(e.message);
    }
  }
}

var keitango = new Person('keitango', 1.84, 67);
console.log(keitango.name);  // keitango
console.log(keitango.getBMI());  // 19.78...
