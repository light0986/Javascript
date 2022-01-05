//三角形內心座標: A(a,b) B(c,d) C(e,f)
function tic(a,b,c,d,e,f,XY){ var AB; var AC; var BC;
    var ABX; var ABY; ABX=Math.abs(a-c);ABY=Math.abs(b-d); ABX=ABX*ABX; ABY=ABY*ABY;AB=Math.sqrt(ABX+ABY);
    var ACX; var ACY; ACX=Math.abs(a-e);ACY=Math.abs(b-f); ACX=ACX*ACX; ACY=ACY*ACY;AC=Math.sqrt(ACX+ACY);
    var BCX; var BCY; BCX=Math.abs(c-e);BCY=Math.abs(d-f); BCX=BCX*BCX; BCY=BCY*BCY;BC=Math.sqrt(BCX+BCY);
    var ABC;ABC=AB+AC+BC;
    var IX;IX=((BC*a)+(AC*c)+(AB*e))/ABC; var IX2;IX2=IX.toFixed(2);
    var IY;IY=((BC*b)+(AC*d)+(AB*f))/ABC; var IY2;IY2=IY.toFixed(2);
    if(XY=='X'){return IX2;} else{return IY2;}}
var x1; var x2; var x3; 
var y1; var y2; var y3;
alert("三角形內心座標(a,b)(c,d)(e,f) => (g,h)=((a+c+e)/3,(b+d+f)/3)");
x1=prompt("(a,b)(c,d)(e,f)請輸入a",""); x1=parseFloat(x1);
y1=prompt("(a,b)(c,d)(e,f)請輸入b",""); y1=parseFloat(y1);
x2=prompt("(a,b)(c,d)(e,f)請輸入c",""); x2=parseFloat(x2);
y2=prompt("(a,b)(c,d)(e,f)請輸入d",""); y2=parseFloat(y2);
x3=prompt("(a,b)(c,d)(e,f)請輸入e",""); x3=parseFloat(x3);
y3=prompt("(a,b)(c,d)(e,f)請輸入f",""); y3=parseFloat(y3);
var ticx; ticx=tic(x1,y1,x2,y2,x3,y3,'X'); var ticy; ticy=tic(x1,y1,x2,y2,x3,y3,'Y');
alert('Ａ座標('+x1+','+y1+'),Ｂ座標('+x2+','+y2+'),Ｃ座標('+x3+','+y3+'),內心座標約=('+ticx+','+ticy+')');
