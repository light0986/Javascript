//三角形面積計算
function Tag(a,b){
    function Qdg(a,b){//四邊形面積
        var L;var H; var aa; aa=L*H;
        L=a;H=b;aa=L*H; 
        return aa;}
    var L; var H; var aa;
    L=a; H=b; aa=Qdg(L,H)/2;
    return aa;}
var x=prompt("三角形面積計算，請輸入底？","");
var y=prompt("請輸入高？")
x=parseInt(x);y=parseInt(y);
alert("底="+x+"，高="+y+"。面積為"+Tag(x,y));