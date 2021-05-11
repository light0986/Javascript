//分辨小數點後幾位？
function ATDP(a){var count=a;
    if(a%1==0){return 0;}else{
    for(i=1;;i++){count=count*10;if(count%1==0)
    {return i;}}}}
var x=prompt("請輸入一個浮點數？","");
x=parseFloat(x);
alert(x+"為小數點後"+ATDP(x)+"位。");