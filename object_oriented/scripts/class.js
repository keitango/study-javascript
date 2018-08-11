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

class Player extends Person{
  constructor(name, height, weight, sport){
    super(name, height, weight);
    this.sport = sport;
  }
  set sport(val){
    this._sport = val;
  }
  get sport(){
    return this._sport;
  }
  introduce(){
    console.log('私は' + this.name + 'です. 身長は' + this.height + '体重は' + this.weight + 'で, ' + this.sport + 'の選手です.');
  }
}

var keitango = new Person('keitango', 1.84, 67);
console.log(keitango.name);  // keitango
console.log(keitango.getBMI());  // 19.78...

var kojiro = new Player('kojiro', 1.80, 75, 'baseball');
kojiro.introduce();
