const greetRadioOne = document.querySelector(".greetRadioOne")
const greetRadioTwo = document.querySelector(".greetRadioTwo")
const greetRadioThree = document.querySelector(".greetRadioThree")
const greetBtn = document.querySelector(".greetBtn")
const greetText = document.querySelector(".greetText")
const greetMessage = document.querySelector(".greetMessage")
const errorMessage = document.querySelector(".errorMessage")
const myCounter = document.querySelector(".myCounter")
const resetBtn = document.querySelector(".resetBtn")


var greetData = localStorage.getItem("nameGreeted") ? JSON.parse(localStorage.getItem("nameGreeted")) : {};

var greetInstance = Greetings(greetData)

//counter stays  on the screen
window.addEventListener('load', function () {
    myCounter.innerHTML = greetInstance.counter()
})

function greetBtnClicked() {

    var radioBtnChecked = document.querySelector("input[name='greetRadioBtn']:checked")
    var theName = greetText.value

    //greetMessage.innerHTML = greetInstance.errorHandling(theName, radioBtnChecked)

    if (theName === "" && radioBtnChecked === null) {
        greetMessage.innerHTML = "Please enter name and Select language"
    }

    else if (theName === "") {
        greetMessage.innerHTML = "Please enter name"
    }

    else if (radioBtnChecked === null) {

        greetMessage.innerHTML = "Please select language"
    }


    else if (radioBtnChecked) {
        greetInstance.setName(theName)
        greetMessage.innerHTML = greetInstance.langMessages(theName, radioBtnChecked.value)

    }

    myCounter.innerHTML = greetInstance.counter()
    console.log(greetInstance.getNames())
    localStorage['nameGreeted'] = JSON.stringify(greetInstance.getNames())

}



function resetBtnClicked() {
    greetInstance.clearObj()
    localStorage.clear()
    location.reload()

}



greetBtn.addEventListener("click", greetBtnClicked)
resetBtn.addEventListener("click", resetBtnClicked)