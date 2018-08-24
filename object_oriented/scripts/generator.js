function* myGenerator(){
  yield 'hogehoge';
  yield 'fugafuga';
}

for(let val of myGenerator()){
  console.log(val);
}
