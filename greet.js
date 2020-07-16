const greetRadioOne = document.querySelector(".greetRadioOne")
const greetRadioTwo = document.querySelector(".greetRadioTwo")
const greetRadioThree = document.querySelector(".greetRadioThree")
const greetBtn = document.querySelector(".greetBtn")
const greetText = document.querySelector(".greetText")
const greetMessage = document.querySelector(".greetMessage")
const myCounter = document.querySelector(".myCounter")
const resetBtn = document.querySelector(".resetBtn")

 var greetInstance = GreetingFac(greetData)

 var greetData = localStorage.getItem("nameGreeted") ? JSON.parse(localStorage.getItem("nameGreeted")) : {};
 

function greetBtnClicked() {

var radioBtnChecked = document.querySelector(".greetRadioBtn:checked")
var theName = greetText.value

if(radioBtnChecked === "English"){

  greetInstance.langMessages()

}

if(radioBtnChecked === "IsiXhosa"){

    greetInstance.langMessages()
}

if(radioBtnChecked === "Afrikaans")

}



function resetBtnClicked (){

greetInstance.clearObj()

}



greetBtn.addEventListener("click" , greetBtnClicked)
resetBtn.addEventListener("click" , resetBtnClicked)
