//梯形面積計算
function Qdg1(a,b,c){
    var uL; var dL;var H;var aa; 
    uL=a;dL=b;H=c;aa=(uL+dL)*H/2; 
    return aa;}
var x=prompt("梯形面積計算，請輸入上底？","");
var y=prompt("請輸入下底？")
var z=prompt("請輸入下高？")
x=parseInt(x);y=parseInt(y);z=parseInt(z);
alert("上底="+x+"，下底="+y+"，高="+z+"。面積為"+Qdg1(x,y,z));