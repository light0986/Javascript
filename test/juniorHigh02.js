//圓面積=pi*r*r
function cirArea(a){var pi;pi=3.14159265359;
    var r;r=a;
    var ca; ca=pi*r*r;
    ca=ca.toFixed(5);return ca;}
alert("圓面積=pi*r*r");
var rd; rd=prompt("請輸入半徑？",""); rd=parseFloat(rd);
var ca; ca=cirArea(rd);
alert('圓面積:'+ca);
