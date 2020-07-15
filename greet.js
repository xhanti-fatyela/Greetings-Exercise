const greetRadioOne = document.querySelector(".greetRadioOne")
const greetRadioTwo = document.querySelector(".greetRadioTwo")
const greetRadioThree = document.querySelector(".greetRadioThree")
const greetBtn = document.querySelector(".greetBtn")
const greetText = document.querySelector(".greetText")
const greetMessage = document.querySelector(".greetMessage")
const myCounter = document.querySelector(".myCounter")
const resetBtn = document.querySelector(".resetBtn")

 var greetInstance = GreetingFac()

function greetBtnClicked() {

var radioBtnChecked = document.querySelector(".greetRadioBtn:checked")
var theName = greetText.value

if(radioBtnChecked){

var valueChecked = radioBtnChecked.value

greetInstance.greetName( theName , valueChecked)

    

}


}

greetBtn.addEventListener("click" , greetBtnClicked)
