//一元二次方程式：2a分之負b 正負根號b平方減4ac
function QEIOV(a,b,c,OT){var a2; var bm; var bp; var fac; var sq;
    a2=a+a; bm=-b; bp=b*b; fac=4*a*c; sq=bp-fac; 
        if(sq>=0){sq=Math.sqrt(sq);} //因為不能為負值
        else{sq=sq*-1; sq=Math.sqrt(sq); sq=sq*-1;} //因為不能為負值
    var Ax1; var Ax2; var Ax11; var Ax22;
    Ax1=(bm+sq)/a2; Ax2=(bm-sq)/a2; Ax11=Ax1.toFixed(5); Ax22=Ax2.toFixed(5);
    if(OT==1){return Ax11;} else{return Ax22;}}
var x2; var x1; var c1;
alert("一元二次方程式，x2+x+c=0，求x解");
x1=prompt("x2+x+c=0，請輸入x2變數？","");
x2=prompt("x2+x+c=0，請輸入x變數？","");
c1=prompt("x2+x+c=0，請輸入c變數？",""); 
x1=parseInt(x1);x2=parseInt(x2);c1=parseInt(c1);
var qe1; var qe2; qe1=QEIOV(x1,x2,c1,1); qe2=QEIOV(x1,x2,c1,2);
alert("("+x1+")X^2+("+x2+")x+("+c1+")=0。x="+qe1+";"+qe2);
