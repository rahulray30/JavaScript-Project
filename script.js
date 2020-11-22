console.log("HHjhhh");
var butAll = document.querySelectorAll("button");
var butR = butAll[0];
//console.log(butR);

function colourChange(cs){
   
    if(cs.value == "Purple"){
        butR.style.backgroundColor = "rgb(128, 0, 128)";
        console.log("Its purple");
    }
}

function reset(){

}

var rId = document.getElementById("r");
console.log(rId.innerHTML);
