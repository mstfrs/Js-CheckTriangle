let side1Value = document.getElementById("#side1");
let side2Value = document.getElementById("#side2");
let side3Value = document.getElementById("#side3");
var calcBtn = document.querySelector("button");
let result = document.querySelector("#result");

// console.log(result);

calcBtn.addEventListener("click", () => {
  if (isNaN(side1.value) || isNaN(side2.value) || isNaN(side3.value)) {
    result.innerHTML = "Wrong Value";
  } else if (side1.value == "" || side2.value == "" || side3.value == "") {
    result.innerHTML = "Lütfen alanları boş bırakmayınız!!!";
  } else {
    if (side1.value == side2.value && side1.value == side3.value) {
      result.innerHTML = "Your triangle is: equilateral";
    } else if (
      side1.value == side2.value ||
      side1.value == side3.value ||
      side2.value == side3.value
    ) {
      result.innerHTML = "Your triangle is: isosceles";
    } else if ((side1.value != side2.value) != side3.value) {
      result.innerHTML = "Your triangle is: scalene ";
    } else {
      result.innerHTML = "wrong value";
    }
  }

  side1.value = "";
  side2.value = "";
  side3.value = "";
});
