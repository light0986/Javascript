//畢氏定理
function PT(a,b,c){ //a平方+b平方=c平方
    var L; var H; var O; L=a; H=b; O=c; 
    if(L==0){L=0}else{L=a*a;}//a平方
    if(H==0){H=0}else{H=b*b;}//b平方
    if(O==0){O=0}else{O=c*c;}//c平方

    if(a==0){L=O-H; L=Math.sqrt(L); return L;}
    else if(b==0){H=O-L; H=Math.sqrt(H); return H;}
    else if(c==0){O=L+H; O=Math.sqrt(O); return O;}
    else{return '錯誤';}}
var L; var H; var O; 
alert("畢氏定理");
L=prompt("請輸入底長？(未知輸入0)",""); 
H=prompt("請輸入高長？(未知輸入0)",""); 
O=prompt("請輸入斜長？(未知輸入0)","");
L=parseFloat(L);H=parseFloat(H);O=parseFloat(O);
var inte; inte=PT(L,H,O);
alert(inte);
