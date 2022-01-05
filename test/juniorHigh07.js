//一元一次不等式，c1>x+c2>c3 範圍計算
function UEDA(x,a,b,c,RL){//x1等號左邊x變數，x2等號中間x變數，x3等號右邊x變數
    var cx; cx=x; //a等號左邊常數，b等號右邊常數
    var lc;var cc; var rc; var lc1; var rc1; 
    lc=a; cc=b; rc=c; lc1=lc-cc; rc1=rc-cc; 
    lc1=lc1/cx; rc1=rc1/cx;
    if(RL==1){return rc1;}else{return lc1;}}
var cx; var lc; var rc; var cc; var A1; var A2; var ueda1; var ueda2;
alert("求一元一次不等式c1>x+c2>c3，x解");
lc=prompt("c1>x+c2>c3，請輸入c1？","");
cx=prompt("c1>cx+c2>c3，請輸入cx變數？","");
cc=prompt("c1>cx+c2>c3，請輸入c2？",""); 
rc=prompt("c1>cx+c2>c3，請輸入c3？","");
lc=parseFloat(lc);cx=parseFloat(cx);cc=parseFloat(cc);rc=parseFloat(rc);
A1=UEDA(cx,lc,cc,rc,1); A2=UEDA(cx,lc,cc,rc,2);
alert("("+lc+")>"+cx+"x+("+cc+")>("+rc+")。x="+A1+";"+A2); 
