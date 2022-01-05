//立方體體積計算：長、寬、高 => W*L*H
function cub(a,b,c){
    var L; var W; var H; var CB;
    L=a;W=b;H=c;CB=L*W*H;
    return CB;} 
var L; var W; var H; var sa; var cb;
L=prompt("請輸入長？",""); ; W=prompt("請輸入寬？",""); H=prompt("請輸入高？","");
L=parseInt(L); W=parseInt(W); H=parseInt(H);
cb=cub(L,W,H);
alert('長:'+L+'，寬:'+W+'，高:'+H+'。體積:'+cb+'立方單位。');
