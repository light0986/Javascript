//四邊形面積
function Qdg(a,b){
    var L; var H; var aa; 
    L=a;H=b;aa=L*H; 
    return aa;}
var x=prompt("四方形與平行四邊形面積計算，請輸入底？","");
var y=prompt("請輸入高？")
x=parseInt(x);y=parseInt(y);
alert("底="+x+"，高="+y+"。面積為"+Qdg(x,y));
