//單位換算
//inp1=輸入數字，inp2=輸入單位，inp3=想得到的單位，function輸出
//input可填'公斤''公噸''台斤''鎊''盎司'
function unit(a,b,c){
    function KGtoKG(a){return a;}//公斤換公斤
    function KGtoMT(a){return a*0.001;}//公斤換公噸
    function KGtoTJ(a){return a*1.66667;}//公斤換台斤
    function KGtoLB(a){return a*2.20462;}//公斤換鎊
    function KGtoOZ(a){return a*35.27396;}//公斤換盎司
    function MTtoKG(a){return a*1000;}//公噸換公斤
    function TJtoKG(a){return a*0.6;}//台斤換公斤
    function LBtoKG(a){return a*0.45359;}//鎊換公斤
    function OZtoKG(a){return a*0.02835;}//盎司換公斤

    var inp1 ; var inp2 ; var inp3 ; var op1; var op2;
    inp1 = a; inp2 = b; inp3 = c;

    switch(inp2){
        case'公斤':
            switch(inp3){
                case'公斤':op1=KGtoKG(inp1);op2=KGtoKG(op1);break;
                case'公噸':op1=KGtoKG(inp1);op2=KGtoMT(op1);break;
                case'台斤':op1=KGtoKG(inp1);op2=KGtoTJ(op1);break;
                case'鎊':op1=KGtoKG(inp1);op2=KGtoLB(op1);break;
                case'盎司':op1=KGtoKG(inp1);op2=KGtoOZ(op1);break;
            default:op1='錯誤';op2=op1;}
    break;
    
        case'公噸':
            switch(inp3){
                case'公斤':op1=MTtoKG(inp1);op2=KGtoKJ(op1);break;
                case'公噸':op1=MTtoKG(inp1);op2=KGtoMT(op1);break;
                case'台斤':op1=MTtoKG(inp1);op2=KGtoTJ(op1);break;
                case'鎊':op1=MTtoKG(inp1);op2=KGtoLB(op1);break;
                case'盎司':op1=MTtoKG(inp1);op2=KGtoOZ(op1);break;
            default:op1='錯誤';op2=op1;}
    break;
    
        case'台斤':
            switch(inp3){
                case'公斤':op1=TJtoKG(inp1);op2=KGtoKG(op1);break;
                case'公噸':op1=TJtoKG(inp1);op2=KGtoMT(op1);break;
                case'台斤':op1=TJtoKG(inp1);op2=KGtoTJ(op1);break;
                case'鎊':op1=TJtoKG(inp1);op2=KGtoLB(op1);break;
                case'盎司':op1=TJtoKG(inp1);op2=KGtoOZ(op1);break;
            default:op1='錯誤';op2=op1;}
    break;
    
        case'鎊':
            switch(inp3){
                case'公斤':op1=LBtoKG(inp1);op2=KGtoKG(op1);break;
                case'公噸':op1=LBtoKG(inp1);op2=KGtoMT(op1);break;
                case'台斤':op1=LBtoKG(inp1);op2=KGtoTJ(op1);break;
                case'鎊':op1=LBtoKG(inp1);op2=KGtoLB(op1);break;
                case'盎司':op1=LBtoKG(inp1);op2=KGtoOZ(op1);break;
            default:op1='錯誤';op2=op1;}
    break;
    
        case'盎司':
            switch(inp3){
                case'公斤':op1=OZtoKG(a);op2=KGtoKG(op1);break;
                case'公噸':op1=OZtoKG(a);op2=KGtoMT(op1);break;
                case'台斤':op1=OZtoKG(a);op2=KGtoTJ(op1);break;
                case'鎊':op1=OZtoKG(a);op2=KGtoLB(op1);break;
                case'盎司':op1=OZtoKG(a);op2=KGtoOZ(op1);break;
            default:op1='錯誤';op2=op1;}
    break;
        default:op1='錯誤';op2=op1;}
    op2 = op2.toFixed(5);return op2;}//取小數點後5位
var inp1; var inp2; var inp3; var op;
inp1=prompt("請輸入一個數？",""); ; inp2=prompt("請輸入一個單位？(公斤,公噸,台斤,鎊,盎司)",""); 
inp3=prompt("請輸入想轉換的單位？(公斤,公噸,台斤,鎊,盎司)",""); inp1=parseFloat(inp1);
op=unit(inp1,inp2,inp3);
alert(inp1+inp2+'='+op+inp3);