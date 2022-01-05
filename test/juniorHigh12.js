//兩座標求斜率，(a,b)(c,d)=>(e/f)
function tps(a,b,c,d,ef){
    var x; var y; x=a-c; y=b-d;
    if(ef=='母'){return x;} else{return y;}}
var x;var x1;var x2;
var y;var y1;var y2;
alert("兩座標求斜率，(a,b)(c,d)=>(e/f)");
x1=prompt("(a,b)(c,d)請輸入a",""); x1=parseFloat(x1);
y1=prompt("(a,b)(c,d)請輸入b",""); y1=parseFloat(y1);
x2=prompt("(a,b)(c,d)請輸入c",""); x2=parseFloat(x2);
y2=prompt("(a,b)(c,d)請輸入d",""); y2=parseFloat(y2);
x=tps(x1,y1,x2,y2,'母'); y=tps(x1,y1,x2,y2,'子');
alert('斜率為='+y+'/'+x);
