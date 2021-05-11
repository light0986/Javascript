//求最小公倍數
function LCM(a,b){
    function GCD(a,b){var re=0;
        do{re=a%b;a=b;b=re;}
        while(re !==0);return a;}
    return (a*b)/GCD(a,b);}
var x=prompt("最小公倍數，請輸入一個數字？","");
var y=prompt("請輸入第二個數字？","");
x=parseInt(x);y=parseInt(y);
alert(x+"與"+y+"的最小公倍數為:"+LCM(x,y));