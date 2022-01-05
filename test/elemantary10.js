//浮點數轉分數
function floTofra(a){var allFactArr=[];
    function ATDP(a){var count=a;
        if(a%1==0){return 0;}else{
        for(i=1;;i++){count=count*10;if(count%1==0)
        {return i;}}}}//分辨小數點

    function mOfTen(a){var count=1;
        for(i=1;i<=a;i++){count = count*10;}
        return count;}//10*10*10....

    function GCD(a,b){var re=0;
        do{re=a%b;a=b;b=re;}
        while(re !==0);return a;}//最大公因數

        var deno=mOfTen(ATDP(a));//分母
        var numer=a*deno;//分子
        var num=GCD(numer,deno);//最大公因數
        var numer1=numer/num; var deno1=deno/num;//約分
        var str; allFactArr.push(numer1); allFactArr.push('/'); allFactArr.push(deno1);
        str = allFactArr.join(''); return str;}
var x=prompt("請輸入一個浮點數？","");
x=parseFloat(x); var y; y=floTofra(x);
alert(x+"="+y);
