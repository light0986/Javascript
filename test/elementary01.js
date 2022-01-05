//辨別字串
var str = prompt("請輸入一串隨機文字","");
var text1 ="" ; var text1_1 ="" ;
var text2 ="" ; var text2_1 ="" ;
var text3 ="" ;

var pattern1 = new RegExp("[A-Za-z]+");
if(pattern1.test(str)){text1= "該字串內有英文，";}
else{text1= "該字串內沒有英文，";}

var pattern1_1 = new RegExp("[Ａ-Ｚａ-ｚ]+");
if(pattern1_1.test(str)){text1_1= "有全形英文，";}
else{text1_1= "沒有全形英文，";}

var pattern2 = new RegExp("[0-9]+");
if(pattern2.test(str)){text2= "有數字，";
        var pattern2_1 = new RegExp("^-[0-9]*[1-9][0-9]*$");
        if(pattern2_1.test(str)){text2_1= "數字為負整數，";}
        else{var pattern2_2 = new RegExp("^[0-9]*[1-9][0-9]*$");
            if(pattern2_2.test(str)){text2_1= "數字為正整數，";}
            else{text2_1= "但混雜。";}
        }}
else{text2= "沒有數字"; text2_1="，"};

var pattern3 = new RegExp("[\u4E00-\u9FA5]+");
if(pattern3.test(str)){text3 = "有中文。";}
else{text3 = "沒有中文。";}

alert(text1+text1_1+text2+text2_1+text3);
