function Palindrome(){
let userId =document.getElementById("userinput").value;
let splitstring=userId.split("");
let reversestring=splitstring.reverse("");
let joinstring = reversestring.join("");
console.log(joinstring);

if(userId===""){
alert("invalid")
       
}

if(userId===joinstring){

    let text =document.getElementById("text").innerText=userId+"    is palindrome"
}
else{
     let text =document.getElementById("text").innerText=userId+"    is not palindrome"
}}