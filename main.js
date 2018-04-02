var baseNumber = document.getElementById("baseNumber");
var index = document.getElementById("index");
var divisor = document.getElementById("divisor");
var result = document.getElementById("result");
var btn = document.getElementById("btn");
var final = 0;
function cal(){
var s =baseNumber.value;
var A = Number(s);
var s2 = index.value;
var code= Number(s2);
var s3 = divisor.value;
var check =(code.toString(2)).split("");
console.log(code.toString(2));
    for(var i=0;i<check.length;i++){
        if(check[i] == "1"){
           A = (Math.pow(A,2) * Number(s)) % (Number(s3));
           console.log(A);
        }
        if(check[i] == "0"){
            A = Math.pow(A,2) % (Number(s3));
            console.log(A);
        }
    }
   // console.log(A);
}









