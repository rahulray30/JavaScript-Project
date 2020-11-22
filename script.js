console.log("HHjhhh");
var butAll = document.querySelectorAll("button");
var initArr = [];
for (let i = 0; i < butAll.length; i++) {
  initArr.push(butAll[i]);
}
console.log(initArr);

function colourChange(cs) {
  if (cs.value == "Purple") {
    for (let i = 0; i < butAll.length; i++) {
      butAll[i].style.backgroundColor = "rgb(128, 0, 128)";
      console.log("Its purple");
    }
  } else if (cs.value == "Orange") {
    for (let i = 0; i < butAll.length; i++) {
      butAll[i].style.backgroundColor = "rgb(252, 166, 7)";
      console.log("Its Orange");
    }
  } else if (cs.value == "Blue") {
    for (let i = 0; i < butAll.length; i++) {
      butAll[i].style.backgroundColor = "rgb(4, 4, 247)";
      console.log("Its Blue");
    }
  } else if (cs.value == "Reset") {
    location.reload();
  }
}

function reset() {}

var rId = document.getElementById("r");
console.log(rId.innerHTML);
