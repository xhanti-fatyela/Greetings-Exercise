const greetRadioOne = document.querySelector(".greetRadioOne")
const greetRadioTwo = document.querySelector(".greetRadioTwo")
const greetRadioThree = document.querySelector(".greetRadioThree")
const greetBtn = document.querySelector(".greetBtn")
const greetText = document.querySelector(".greetText")
const greetMessage = document.querySelector(".greetMessage")
const myCounter = document.querySelector(".myCounter")
const resetBtn = document.querySelector(".resetBtn")



var greetData = localStorage.getItem("nameGreeted") ? JSON.parse(localStorage.getItem("nameGreeted")) : {};
var greetInstance = GreetingFac(greetData)

function greetBtnClicked() {

    var radioBtnChecked = document.querySelector(".greetRadioBtn:checked")
    var theName = greetText.value

    if (radioBtnChecked.value === "English") {

        greetInstance.langMessages()

    }

    if (radioBtnChecked.value === "IsiXhosa") {

        greetInstance.langMessages()
    }

    if (radioBtnChecked.value === "Afrikaans") {
        greetInstance.langMessages()
    }

    if (theName) {
        greetInstance.setName()
    }

}



function resetBtnClicked() {

    greetInstance.clearObj()

}



greetBtn.addEventListener("click", greetBtnClicked)
resetBtn.addEventListener("click", resetBtnClicked)
