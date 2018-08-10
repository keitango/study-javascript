// 空のオブジェクトを利用し名前空間を定義
var Keitango = Keitango || {};  // Keitangoが未定義の場合に名前空間を作成

// Keitangoオブジェクトのプロパティに，Deviceオブジェクトを追加
Keitango.Device = function(name, ip_addr, mac_addr){
  this.name = name;
  this.ip_addr = ip_addr;
  this.mac_addr = mac_addr;
};

Keitango.Device.prototype.displayDviceInfo = function(){
  var device_info = `name : ${this.name}
ip address : ${this.ip_addr}
mac addres : ${this.mac_addr}`;
  console.log(device_info);
};

var dev_router = new Keitango.Device("aterm xxxx", "192.168.10.3", "ZZ:ZZ:ZZ:ZZ:ZZ:ZZ");
dev_router.displayDviceInfo();
