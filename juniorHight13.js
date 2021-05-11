//兩座標求二元一次方程式(a,b)(c,d) => ex+fy=g
function tpl(a,b,c,d,efg){
    function BLE(a,b,c,aa,bb,cc,xy){//二元一次聯立方程式, x1+y1=c1;x2+y2=c2
        //解Ｘ
        var y1;y1=b/bb;var x2;x2=aa*y1;var c1;c1=cc*y1;
        var ax;ax=a-x2; var ac1;ac1=c-c1;var Ax;Ax=ac1/ax;
        //解Ｙ
        var x1;x1=a/aa;var y2;y2=bb*x1; var c2;c2=cc*x1;
        var ay;ay=b-y2; var ac2;ac2=c-c2;var Ay;Ay=ac2/ay;
 
        if(xy=='X'){return Ax;}
        else{return Ay;}}
    var y1;var x1;var c1; y1=b; x1=a; c1=1;
    var y2;var x2;var c2; y2=d; x2=c; c2=1;
    var a1;a1=BLE(x1,c1,y1,x2,c2,y2,'X');
    var a2;a2=BLE(x1,c1,y1,x2,c2,y2,'Y');

    if(efg=='e'){return a1;}else if(efg=='f'){return -1;}
    else{return a2;};}
var x1; var y1; var x2; var y2;
var sw1; var sw2; var sw3; sw1='e'; sw2='f'; sw3='g'; var eA; var fA; var gA; 
alert("兩座標求二元一次方程式(a,b)(c,d) => ex+fy=g");
x1=prompt("(a,b)(c,d)請輸入a",""); x1=parseFloat(x1);
y1=prompt("(a,b)(c,d)請輸入b",""); y1=parseFloat(y1);
x2=prompt("(a,b)(c,d)請輸入c",""); x2=parseFloat(x2);
y2=prompt("(a,b)(c,d)請輸入d",""); y2=parseFloat(y2);
eA=tpl(x1,y1,x2,y2,sw1); fA=tpl(x1,y1,x2,y2,sw2); gA=tpl(x1,y1,x2,y2,sw3);
alert('Ａ座標('+x1+','+y1+'),Ｂ座標('+x2+','+y2+')，方程式為:('+eA+')X+('+fA+')Y+('+gA+')=0');