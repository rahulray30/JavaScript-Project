console.log("HHjhhh");
var butAll = document.querySelectorAll("button");
var initArr = [];
console.log(document.getElementById("r").style.backgroundColor);

//console.log(initArr[0].style.backgroundColor);

function colourChange(cs) {
  if (cs.value == "Reset") {
    let colour = ["red", "yellow", "green"];
    for (let i = 0; i < butAll.length; i++) {
      butAll[i].style.backgroundColor = colour[i];
    }
    //location.reload();
  } else if (cs.value == "Purple") {
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
  } else if (cs.value == "Random") {
    randomValue();
  }
}

function randomValue() {
  let arr = ["red", "blue", "green", "orange", "purple", "blue"];
  let p = 0;
  while (p < butAll.length) {
    let r = Math.floor(Math.random() * 6);
    butAll[p].style.backgroundColor = arr[r];
    console.log(arr[r]);
    p++;
  }
}

var rId = document.getElementById("r");
console.log(rId.innerHTML);
