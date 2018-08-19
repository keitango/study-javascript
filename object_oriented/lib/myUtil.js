export class Person{

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
  introduce(){
    console.log('私は' + this.name + 'です. 身長は' + this.height + '[m], 体重は' + this.weight + '[kg]です. BMIは' + this.getBMI() + "です.");
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

export class Player extends Person{
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
  // overload
  introduce(){
    console.log('私は' + this.name + 'です. 身長は' + this.height + '[m], 体重は' + this.weight + '[kg]です. ' + this.sport + 'の選手です. BMIは' + super.getBMI() + 'です.');
  }
}
