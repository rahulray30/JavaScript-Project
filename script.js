
console.log("HHjhhh");
var butAll = document.querySelectorAll("button");
var initArr = [];
console.log(document.getElementById("r").style.backgroundColor);


//console.log(initArr[0].style.backgroundColor);

function colourChange(cs) {
  if (cs.value == "Purple") {
    for (let i = 0; i < butAll.length; i++) {
      butAll[i].style.backgroundColor = "purple";
      console.log("Its purple");
    }
  } else if (cs.value == "Orange") {
    for (let i = 0; i < butAll.length; i++) {
      butAll[i].style.backgroundColor = "orange";
      console.log("Its Orange");
    }
  } else if (cs.value == "Blue") {
    for (let i = 0; i < butAll.length; i++) {
      butAll[i].style.backgroundColor = "blue";
      console.log("Its Blue");
    }
  } else if (cs.value == "Reset") {
    butAll[0].style.backgroundColor = initArr[0];
  }
}

var rId = document.getElementById("r");
console.log(rId.innerHTML);
