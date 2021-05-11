//兩座標求中心，(a,b)(c,d)=>(e,f)
function tcc(a,b,c,d,ef){
    var xc; var yc; xc=(a+c)/2; yc=(b+d)/2;
    if(ef=='X'){return xc;} else{return yc;}}
var x1; var x2; var y1; var y2;
alert("兩座標求中心，(a,b)(c,d)=>(e,f)");
x1=prompt("(a,b)(c,d)請輸入a",""); x1=parseFloat(x1);
y1=prompt("(a,b)(c,d)請輸入b",""); y1=parseFloat(y1);
x2=prompt("(a,b)(c,d)請輸入c",""); x2=parseFloat(x2);
y2=prompt("(a,b)(c,d)請輸入d",""); y2=parseFloat(y2);
var xc;xc=tcc(x1,y1,x2,y2,'X');var yc;yc=tcc(x1,y1,x2,y2,'Y');
alert('('+x1+','+y1+')，('+x2+','+y2+')。中心座標為:('+xc+','+yc+')');