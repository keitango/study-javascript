var Robot = function(name, height_m, weight_t, power_kw){
  this.name = name;
  this.height_m = height_m;
  this.weight_t = weight_t;
  this.power_kw = power_kw;
}

// オブジェクトリテラルでプロトタイプを定義する
Robot.prototype = {
  getName : function(){
    return this.name;
  },
  getHeight_m : function(){
    return this.height_m;
  },
  getWeight_t : function(){
    return this.weight_t;
  },
  getPower_kw : function(){
    return this.power_kw;
  },
  // power to weight raito = power[kw] / weight[t]
  // 大きいほど加速性能が高い
  getPowerToWeightRaito_kwpt : function(){
    return this.power_kw / this.weight_t;
  }
};

var zaku2 = new Robot("zakuⅡ FZ", 17.5, 74.5, 976);
console.log("name : " + zaku2.getName());
console.log("height : " + zaku2.getHeight_m() + "[m]");
console.log("weight : " + zaku2.getWeight_t() + "[t]");
console.log("power : " + zaku2.getPower_kw() + "[kw]");
console.log("power-to-weight : " + zaku2.getPowerToWeightRaito_kwpt() + "[kw/t]");
