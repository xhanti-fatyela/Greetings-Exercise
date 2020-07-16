function Greetings() {

    var objMap = {};

    function setName(name) {
        if (objMap[name] === undefined) {
            objMap[name] = 0;
        }
    }

    function langMessages(name, lang) {
        if (lang === "IsiXhosa") {
            return "Molo " + name + "!"
        }
        if (lang === "English") {
            return "Hello " + name + "!"
        }
        if (lang === "Afrikaans") {
            return "Halo " + name + "!"
        }
    }

    function getNames() {
        return objMap;
    }

    function counter() {
        return Object.keys(objMap).length
    }

    function errorHandling(name, lang) {
         if (name === "" && lang === "") {
            return "Please enter the name and select language"
         }
        if (!name) {
            return "Please enter the name"
        }
        if (!lang) {
            return "Please select the language"
        }
    }


    function clearObj() {
        objMap = {}
    }

    return {
        setName,
        getNames,
        counter,
        langMessages,
        clearObj,
        errorHandling
    }
}

