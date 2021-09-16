var txtInput = document.querySelector("#input");
var txtOutput = document.querySelector("#output");
var btnTranslate = document.querySelector("#btn");

console.log("hey");
console.log(btnTranslate);

// var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
// var url = "https://api.funtranslations.com/translate/minion.json"
var url = "https://api.funtranslations.com/translate/pig-latin.json"

btnTranslate.addEventListener("click", process)

function errorHandler(error){
    console.log("error",error)
    alert("sonething is wrong");
}

function process(){
    var inputText = txtInput.value;

    fetch(generateURL(inputText))
        .then(response => response.json())
        .then(json=> {
            var translatedText = json.contents.translated;
            txtOutput.textContent = translatedText
            console.log(translatedText)
            console.log("here")
        })
        .catch(errorHandler)
};

function generateURL(text){
    return url + "?text=" + text
}