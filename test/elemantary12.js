//立方體表面積計算：長、寬、高 => wL2+WH2+LH2 
function suArea(a,b,c){
    var L; var W; var H; 
    var sa1; var sa2; var sa3; var sa;
    L=a;W=b;H=c;
    sa1=L*W*2; sa2=L*H*2; sa3=W*H*2; sa=sa1+sa2+sa3;
    return sa;}
    var L; var W; var H; var sa; var cb;
L=prompt("請輸入長？",""); ; W=prompt("請輸入寬？",""); H=prompt("請輸入高？","");
L=parseInt(L); W=parseInt(W); H=parseInt(H);
sa=suArea(L,W,H);
alert('長:'+L+'，寬:'+W+'，高:'+H+'。面積:'+sa+'平方單位');
