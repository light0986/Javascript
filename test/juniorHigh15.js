//三角形重心座標(a,b)(c,d)(e,f) => (g,h)=((a+c+e)/3,(b+d+f)/3)
function tcog(a,b,c,d,e,f,XY){
    var g1; var g2; g1=(a+c+e)/3; g2=(b+d+f)/3;
    var g11; var g22; g11=g1.toFixed(2); g22=g2.toFixed(2);
    if(XY=='X'){return g11;} else{return g22;}}
var x1; var x2; var x3; 
var y1; var y2; var y3;
alert("三角形重心座標(a,b)(c,d)(e,f) => (g,h)=((a+c+e)/3,(b+d+f)/3)");
x1=prompt("(a,b)(c,d)(e,f)請輸入a",""); x1=parseFloat(x1);
y1=prompt("(a,b)(c,d)(e,f)請輸入b",""); y1=parseFloat(y1);
x2=prompt("(a,b)(c,d)(e,f)請輸入c",""); x2=parseFloat(x2);
y2=prompt("(a,b)(c,d)(e,f)請輸入d",""); y2=parseFloat(y2);
x3=prompt("(a,b)(c,d)(e,f)請輸入e",""); x3=parseFloat(x3);
y3=prompt("(a,b)(c,d)(e,f)請輸入f",""); y3=parseFloat(y3);
var tcgx; tcgx=tcog(x1,y1,x2,y2,x3,y3,'X'); var tcgy; tcgy=tcog(x1,y1,x2,y2,x3,y3,'Y');
alert('Ａ座標('+x1+','+y1+'),Ｂ座標('+x2+','+y2+'),Ｃ座標('+x3+','+y3+'),重心座標約=('+tcgx+','+tcgy+')'); 
