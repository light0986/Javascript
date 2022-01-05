//二元一次聯立方程式, x1+y1=c1;x2+y2=c2 
function BLE(a,b,c,aa,bb,cc,xy){
    //解Ｘ
    var y1;y1=b/bb;var x2;x2=aa*y1;var c1;c1=cc*y1;
    var ax;ax=a-x2; var ac1;ac1=c-c1;var Ax;Ax=ac1/ax;
    
    //解Ｙ
    var x1;x1=a/aa;var y2;y2=bb*x1; var c2;c2=cc*x1;
    var ay;ay=b-y2; var ac2;ac2=c-c2;var Ay;Ay=ac2/ay;
    if(xy=='x'){return Ax;}
    else{return Ay;}}
var x1; var y1; var c1; var x2; var y2; var c2; var X; var Y; X='x'; Y='y';
alert("二元一次聯立方程式，x1+y1=c1;x2+y2=c2，求x;y解");
x1=prompt("x1+y1=c1;x2+y2=c2，請輸入x1變數？","");
y1=prompt("x1+y1=c1;x2+y2=c2，請輸入y1變數？","");
c1=prompt("x1+y1=c1;x2+y2=c2，請輸入c1？",""); 
x2=prompt("x1+y1=c1;x2+y2=c2，請輸入x2變數？","");
y2=prompt("x1+y1=c1;x2+y2=c2，請輸入y2變數？","");
c2=prompt("x1+y1=c1;x2+y2=c2，請輸入c2？","");
x1=parseFloat(x1);y1=parseFloat(y1);c1=parseFloat(c1);
x2=parseFloat(x2);y2=parseFloat(y2);c2=parseFloat(c2);
var Ax; var Ay;Ax=BLE(x1,y1,c1,x2,y2,c2,X); Ay=BLE(x1,y1,c1,x2,y2,c2,Y);
alert("("+x1+")X+("+y1+")Y="+c1+";("+x2+")X+("+y2+")Y="+c2+"。X="+Ax+";Y="+Ay);
