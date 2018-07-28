// no label
document.write("ラベルなし : 30以下の九九の結果を表示する <br />");
for(let i = 1; i < 10; i ++){
    for(let j = 1; j < 10; j ++){
        if(i * j > 30){ break; }
        document.write(i * j + '&nbsp');
    }
    document.write('<br />');
}
document.write('<br />');
// use label
document.write("ラベルあり : 30を超えたら九九の結果表示を終了する <br />");
kuku :  // label
for(let i = 1; i < 10; i ++){
    for(let j = 1; j < 10; j ++){
        if(i * j > 30){ break kuku; }
        document.write(i * j + '&nbsp');
    }
    document.write('<br />');
}
