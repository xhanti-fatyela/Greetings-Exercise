$(function () {
    
    var namesGreeted;
    if (localStorage['names']) {
      namesGreeted = JSON.parse(localStorage.getItem('names'));
    }
    var greetedNames = Greetings(namesGreeted)
  
    $(".greetBtn").on("click", function () {
  
      var name = $(".greetText").val()
      console.log(name)
      var addToLocal = greetedNames.setName(name)
      
      $(".greetRadio")
      var checked = $("input:checked").val()
       console.log(checked);
      if (addToLocal !== "") {
  
        $(".greetMessage").text(checked + name);
        $("#myCounter").html($(greetedNames.counter()))
        localStorage.setItem('names', JSON.stringify(greetedNames.getNames()));
      }
  
  
  
  
  
    })
  
  
  
  });
  
  // var userName = greetedNames.languageChecked(lang, name)
// const greetRadioOne = document.querySelector(".greetRadioOne")
// const greetRadioTwo = document.querySelector(".greetRadioTwo")
// const greetRadioThree = document.querySelector(".greetRadioThree")
// const greetBtn = document.querySelector(".greetBtn")
// const greetText = document.querySelector(".greetText")
// const greetMessage = document.querySelector(".greetMessage")
// const errorMessage = document.querySelector(".errorMessage")
// const myCounter = document.querySelector(".myCounter")
// const resetBtn = document.querySelector(".resetBtn")


// var greetData = localStorage.getItem("nameGreeted").toLowerCase() ? JSON.parse(localStorage.getItem("nameGreeted")) : {};

// var greetInstance = Greetings(greetData)

// //counter stays  on the screen
// window.addEventListener('load', function () {
//     myCounter.innerHTML = greetInstance.counter()
// })

// function greetBtnClicked() {

//     var radioBtnChecked = document.querySelector("input[name='greetRadioBtn']:checked")
//     var theName = greetText.value
//     greetInstance.setName(theName)
//     greetMessage.innerHTML = greetInstance.errorHandling(theName, radioBtnChecked)
//     if (radioBtnChecked) {
//         greetMessage.innerHTML = greetInstance.langMessages(theName, radioBtnChecked.value)


//     }

//     myCounter.innerHTML = greetInstance.counter()
//     console.log(greetInstance.getNames())
//     localStorage['nameGreeted'] = JSON.stringify(greetInstance.getNames())

// }



// function resetBtnClicked() {
//     greetInstance.clearObj()
//     localStorage.clear()
//     location.reload()

// }



// greetBtn.addEventListener("click", greetBtnClicked)
// resetBtn.addEventListener("click", resetBtnClicked)