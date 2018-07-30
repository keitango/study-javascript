function printf(formal){
  for(var i = 0, len = arguments.length; i < len; i++){
    var pattern = new RegExp('\\{'+(i - 1) + '\\}', 'g');
    console.log(pattern);
    formal = formal.replace(pattern, arguments[i]);
  }
  console.log(formal);
}

printf('こんにちは，{0}さん．私は{1}です.', '🍁', '🍅');
