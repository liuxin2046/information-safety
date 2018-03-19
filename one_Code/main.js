var plainText;
var plainText_code = [];
var plain_code;
var key;
var cipher_code;
var cipherText;
var e_cipherText;
var e_cipherText_code = [];
var e_key;
var e_plainText;
var btn1;
var btn2;
var btn3;
var btn4;
var letter = ["e","h","i","k","l","r","s","t"];
var code = ["000","001","010","011","100","101","110","111"];
document.body.onload = init;
function init(){
    plainText = document.getElementById("plainText");
    plain_code = document.getElementById("plain_code");
    key = document.getElementById("key");
    cipher_code = document.getElementById("cipher_code");
    cipherText = document.getElementById("cipherText");
    e_cipherText = document.getElementById("e_cipherText");
    e_key = document.getElementById("e_key");
    e_plainText = document.getElementById("e_plainText");
    btn1 = document.getElementById("get_code");
    btn1.addEventListener("click",getPlainText);
    btn2 = document.getElementById("set_code");
    btn2.addEventListener("click",setCipherTextCode);
    btn3 = document.getElementById("set_cipher");
    btn3.addEventListener("click",setCipherText);
    btn4 = document.getElementById("set_plain");
    btn4.addEventListener("click",setPlainText);
}
function getPlainText(){
    plainText_value = plainText.value;
    var p = plainText_value.split("");
    for(var i=0;i<p.length;i++){
        for(var j=0;j<8;j++){
            if(p[i] == letter[j]){
                plainText_code[i] = code[j]; //找到明文对应的二进制
                break;
            }
        }
    }
    for(var i=0;i<p.length;i++){
        plain_code.value += plainText_code[i];
    }
    
}
function setCipherTextCode(){
    var key_value = key.value; 
    var plain_code_split = plain_code.value.split("");//得到的是一整串的二进制
    var k = key_value.split(" ");
    var key_value_split = "";
    for(var i=0;i<k.length;i++){
        key_value_split += k[i]; //得到一整串的key二进制
    }
    var c_code = [];
    for(var i=0;i<key_value_split.length;i++){
        c_code[i] = plain_code_split[i] == key_value_split[i] ? "0":"1"; 
    }
    for(var i=0;i<key_value_split.length;i++){
        cipher_code.value += c_code[i];
    }

}
function setCipherText(){
    var m ="";
    var m_text = [];
    for(var i=0;i<cipher_code.value.length;i=i+3){
        m += cipher_code.value.slice(i,i+3) + " ";
    }
    console.log(m);
    var m_split = m.split(" ");
    for(var i=0;i<m_split.length;i++){
        for(var j=0;j<8;j++){
            if(m_split[i] == code[j]){
                m_text[i] = letter[j];
                break;
            }
        }
    }
    console.log(m_text);
    for(var i=0;i<m_text.length;i++){
        cipherText.value += m_text[i];
    }
    
}
function setPlainText(){
    var c = e_cipherText.value.split("");
    var e = e_key.value.split(" ");
    var e_key_split = ""; 
    var e_cipherText_code_all = "";
    var k_split = "";
    var c_split = "";
    for(var i=0;i<e.length;i++){
        e_key_split += e[i];    //获取一整串key的二进制
    }
    for(var i=0;i<c.length;i++){
        for(var j=0;j<8;j++){
            if(c[i] == letter[j]){
                e_cipherText_code[i] = code[j];
                break; 
            }
        }
    }
    console.log("e_cipherText: "+e_cipherText_code);
    for(var i=0;i<c.length;i++){
        e_cipherText_code_all += e_cipherText_code[i];  //获取一整串密文的二进制
    }
    k_split = e_key_split.split("");
    c_split = e_cipherText_code_all.split("");
    var p_code = [];
    var p_code_text = "";
    for(var i=0;i<k_split.length;i++){
        p_code[i] = k_split[i] == c_split[i] ? "0":"1";
        p_code_text += p_code[i]; //获取到了一整串明文的二进制
    }
    var m ="";
    var m_text = [];
    for(var i=0;i<p_code_text.length;i=i+3){
        m += p_code_text.slice(i,i+3) + " ";
    }
    console.log(m);
    var m_split = m.split(" ");
    for(var i=0;i<m_split.length;i++){
        for(var j=0;j<8;j++){
            if(m_split[i] == code[j]){
                m_text[i] = letter[j];
                break;
            }
        }
    }
    console.log(m_text);
    for(var i=0;i<m_text.length;i++){
        e_plainText.value += m_text[i];
    }

}