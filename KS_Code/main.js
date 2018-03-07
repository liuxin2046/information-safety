var plainText;
var p;
var c;
var cipherText;
var finalText = document.getElementById("finalText");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
//设置26个字母数组
var s = "abcdefghijklmnopqrstuvwxyz";
var letter = s.split("");
var k = 3;
var p_number = [];
var c_number = [];

btn1.addEventListener("click",getCipherText);
btn2.addEventListener("click",getPlainText);

function getCipherText(){
    plainText = document.getElementById("plainText").value;
    p = plainText.split(""); 
    //获取明文的数字序列
    for(var i=0;i<p.length;i++){
        for(var j=0;j<26;j++){
            if(p[i] == letter[j] || p[i] == letter[j].toUpperCase()){
                p_number[i] = j;
                break;
            }
        }
    }
    console.log(p_number);
    setCipherNumber();
    setCipherText();
}

function getPlainText(){
    cipherText = document.getElementById("cipherText").value;
    c = cipherText.split(""); 
    //获取密文的数字序列
    for(var i=0;i<c.length;i++){
        for(var j=0;j<26;j++){
            if(c[i] == letter[j] || c[i] == letter[j].toUpperCase()){
                c_number[i] = j;
                break;
            }
        }
    }
    console.log(c_number);
    setPlainNumber();
    setPlainText();

}
//生成明文的数字序列
function setPlainNumber(){
    for(var i=0;i<c_number.length;i++){
        p_number[i] = (c_number[i] - k + 26) % 26; 
    }
    console.log(p_number);
}
//生成明文
function setPlainText(){
    var p_text="";
    for(var i=0;i<p_number.length;i++){
        p_text += letter[p_number[i]];
    }
    console.log(p_text);
    finalText.value = p_text;

}
//生成密文数字序列
function setCipherNumber(){
    for(var i=0;i<p_number.length;i++){
        c_number[i] = (p_number[i] + k) % 26; 
    }
    console.log(c_number);
}
//生成密文
function setCipherText(){
    var c_text="";
    for(var i=0;i<c_number.length;i++){
        c_text += letter[c_number[i]];
    }
    console.log(c_text);
    finalText.value = c_text;
}

