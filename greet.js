const greetRadioOne = document.querySelector(".greetRadioOne")
const greetRadioTwo = document.querySelector(".greetRadioTwo")
const greetRadioThree = document.querySelector(".greetRadioThree")
const greetBtn = document.querySelector(".greetBtn")
const greetText = document.querySelector(".greetText")

 

function greetBtnClicked() {

var theName = greetText.value
alert(theName)

}

greetBtn.addEventListener("click" , greetBtnClicked)
