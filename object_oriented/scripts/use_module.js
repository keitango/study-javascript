import {Person, Player} from '../lib/myUtil'

var keitango = new Person('keitango', 1.84, 67);
console.log(keitango.name);  // keitango
console.log(keitango.getBMI());  // 19.78...
keitango.introduce();

var kojiro = new Player('kojiro', 1.80, 75, 'baseball');
kojiro.introduce();
