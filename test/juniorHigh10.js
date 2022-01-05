//常見幾何應用，比與比值，等比例交換(a1:b1=a2:b2)
function gepT(a1,b1,a2,b2){
    var final; var sw1; var sw2; var sw3; var sw4; var asw;
    if(a1==0){sw1=1000;}else{sw1=0}; if(b1==0){sw2=100;}else{sw2=0};
    if(a2==0){sw3=10;}else{sw3=0}; if(b2==0){sw4=1;}else{sw4=0};
    asw=sw1+sw2+sw3+sw4;
    switch(asw){
        case 1:final=a2*(b1/a1);break;//b2空
        case 10:final=b2/(b1/a1);break;//a2空
        case 100:final=a1*(b2/a2);break;//b1空
        case 1000:final=b1/(b2/a2);break;//a1空
        default:final='錯誤';break;}
        return final;}
var H1; var L1; var H2; var L2;
alert("等比例互換a1:b1=a2:b2。");
H1=prompt("a1:b1=a2:b2。請輸入a1(未知輸入0)","");
L1=prompt("a1:b1=a2:b2。請輸入b1(未知輸入0)","");
H2=prompt("a1:b1=a2:b2。請輸入a2(未知輸入0)","");
L2=prompt("a1:b1=a2:b2。請輸入b2(未知輸入0)","");
H1=parseFloat(H1); L1=parseFloat(L1);
H2=parseFloat(H2); L2=parseFloat(L2);;
alert("未知數="+gepT(H1,L1,H2,L2));
