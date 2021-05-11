//給4個座標，求面積:(a,b)(c,d)(e,f)(g,h)
//（a x d + c x f + e x h + g x b - b x c - d x e - f x g - h x a）除以 2
function cA(a,b,c,d,e,f,g,h){
    var Are; Are=((a*d)+(c*f)+(e*h)+(g*d)-(b*c)-(d*e)-(f*g)-(h*a))/2;
    return Are;}
var x1; var x2; var x3; var x4;
var y1; var y2; var y3; var y4;
alert("給4個座標，求面積:(a,b)(c,d)(e,f)(g,h)");
x1=prompt("(a,b)(c,d)(e,f)請輸入a",""); x1=parseFloat(x1);
y1=prompt("(a,b)(c,d)(e,f)請輸入b",""); y1=parseFloat(y1);
x2=prompt("(a,b)(c,d)(e,f)請輸入c",""); x2=parseFloat(x2);
y2=prompt("(a,b)(c,d)(e,f)請輸入d",""); y2=parseFloat(y2);
x3=prompt("(a,b)(c,d)(e,f)請輸入e",""); x3=parseFloat(x3);
y3=prompt("(a,b)(c,d)(e,f)請輸入f",""); y3=parseFloat(y3);
x4=prompt("(a,b)(c,d)(e,f)請輸入e",""); x4=parseFloat(x4);
y4=prompt("(a,b)(c,d)(e,f)請輸入f",""); y4=parseFloat(y4);
var are; are=cA(x1,y1,x2,y2,x3,y3,x4,y4);
alert('Ａ座標('+x1+','+y1+'),Ｂ座標('+x2+','+y2+'),Ｃ座標('+x3+','+y3+'),Ｄ座標('+x4+','+y4+')，面積為='+are);