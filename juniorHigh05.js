//內公切線長：帶入兩圓半徑，與連心線
function ICT(a,b,c){
    function PT(a,b,c){ //畢氏定理：a平方+b平方=c平方
        var L; var H; var O; L=a; H=b; O=c; 
        if(L==0){L=0;}else{L=a*a;}//a平方
        if(H==0){H=0;}else{H=b*b;}//b平方
        if(O==0){O=0;}else{O=c*c;}//c平方
        
        if(a==0){L=O-H; L=Math.sqrt(L); return L;}
        else if(b==0){H=O-L; H=Math.sqrt(H); return H;}
        else if(c==0){O=L+H; O=Math.sqrt(O); return O;}
        else{return '錯誤';}}
    
    var rd1; var rd2; var rdc; var ict; var cl; cl=c;
    rd1=a;rd2=b;rdc =rd1+rd2;//半徑相加
    ict = PT(0,rdc,cl);
return ict;}
var rd1; var rd2; var rdc; 
alert("求內公切線長");
rd1=prompt("請輸入圓Ａ半徑?",""); 
rd2=prompt("請輸入圓Ｂ半徑?",""); 
rdc=prompt("請輸入兩圓圓心距離?","");
rd1=parseFloat(rd1);rd2=parseFloat(rd2);rdc=parseFloat(rdc);
var inte; inte=ICT(rd1,rd2,rdc);
alert("內公切線長為:"+inte);
