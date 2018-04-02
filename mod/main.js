var baseNumber = document.getElementById("baseNumber");
var index = document.getElementById("index");
var divisor = document.getElementById("divisor");
var result = document.getElementById("result");
var btn = document.getElementById("btn");
baseNumber.focus();
function cal(){
var check = [];
var s1 =baseNumber.value;
var s2 = index.value;
var s3 = divisor.value;
var A = Math.pow(Number(s1),0);
var B = Number(s2);
var C = Number(s3);
var code= B.toString(2); //把指数转成二进制
var check =code.split("");
console.log(check);
    for(var i=0;i<check.length;i++){
        if(check[i] == "1"){
           A = (Math.pow(A,2) * Number(s1)) % C;
           console.log(A);
        }
        if(check[i] == "0"){
            A = Math.pow(A,2) % C;
            console.log(A);
        }
    }
   result.value = A;
}









