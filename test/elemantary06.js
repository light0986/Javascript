//因數分解：帶兩數值，得其全公因數
function comFact(a,b){var allFactArr=[];
    for(var i = 1; i<= a+b ;i++){
        if(a%i==0 && b%i==0)
        {allFactArr.push(i);}
    }return allFactArr;}
var x=prompt("所有公因數，請輸入一個數字？","");
var y=prompt("請輸入第二個數字？","");
x=parseInt(x);y=parseInt(y);
alert(x+"與"+y+"的因數為:"+comFact(x,y));
