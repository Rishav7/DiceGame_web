
var n = Math.floor(Math.random() * 6) + 1;

var randomImage="img" + n + ".png";

var source = "Images/" + randomImage ;

var image1 =document.querySelectorAll("img")[0];
image1.setAttribute("src",source);



var n2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "Images/img" + n2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

 if(n>n2){
   document.querySelector("h1").innerHTML = "Meeshika Wins!😁";
 }
else if(n<n2){
   document.querySelector("h1").innerHTML = "Mehul Wins!😁";
 }
 else{
   document.querySelector("h1").innerHTML = "Draw😜";
}
