//最大公因數
function GCD(a,b){var re=0;
    do{re=a%b;a=b;b=re;}
    while(re !==0);return a;}
var x=prompt("最大公因數，請輸入一個數字？","");
var y=prompt("請輸入第二個數字？","");
x=parseInt(x);y=parseInt(y);
alert(x+"與"+y+"的因數為:"+GCD(x,y));