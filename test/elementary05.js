//因數分解：帶入一值，得其因數
function Fact(a){var allFactArr=[];    
    for(var i = 1; i<=a ;i++){
        if(a % i == 0){allFactArr.push(i);}
    }return allFactArr;}
var x=prompt("因數分解，請輸入一個數字？","");
x=parseInt(x);
alert(x+"的因數為:"+Fact(x));
