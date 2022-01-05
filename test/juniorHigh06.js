//一元一次方程式
function UE(x1,x2,a,b){//x1等號左邊x變數，x2等號右邊x變數，a等號左邊常數，b等號右邊常數
    var lx; var rx; var lc; var rc; var ax; var ac; lx=x1; rx=x2; lc=a; rc=b; 
    ac=rc-lc;//常數等號互換
    ax=lx-rx;//變數等號互換
    ax=ac/ax; return ax;}
var lx; var rx; var lc; var rc; var ue;
var rd1; var rd2; var rdc; 
alert("求一元一次方程Ｘ解");
lx=prompt("請輸入等號左邊x變數？","");
lc=prompt("請輸入等號左邊常數變數？","");
rx=prompt("請輸入等號右邊x變數？",""); 
rc=prompt("請輸入等號右邊常數變數？","");
lx=parseFloat(lx);lc=parseFloat(lc);rx=parseFloat(rx);rc=parseFloat(rc);
var inte; inte=UE(lx,rx,lc,rc);
alert("("+lx+")X+("+lc+")=("+rx+"X)+("+rc+")。X="+inte);
