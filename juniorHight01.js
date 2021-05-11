//圓周=2*Pi*r
function cirFere(a){var pi;pi=3.14159265359;
    var r;r=a; 
    var cf; cf=2*pi*r;
    cf=cf.toFixed(5);return cf;}
var rd; rd=prompt("求圓周，請輸入半徑？",""); rd=parseFloat(rd);
var cf; cf=cirFere(rd);
alert('圓周:'+cf); 