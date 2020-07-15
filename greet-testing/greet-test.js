describe("the Greetins Exercise", function () {

    it("should greet with name entered & selected language & Count", function () {

        let greetingsEX = Greetings()

        greetingsEX.langMessages("Xhanti", "English")
        greetingsEX.counter()
        greetingsEX.setName("Xhanti")


        assert.equal(greetingsEX.langMessages("Xhanti", "English", "!"), "Hello Xhanti!");
        assert.equal(1, greetingsEX.counter())



    });

    it("should greet with name entered & selected 'IsiXhosa'", function () {

        let greetingsEX = Greetings()

        greetingsEX.langMessages("Lona", "IsiXhosa")

        assert.equal(greetingsEX.langMessages("Lona", "IsiXhosa", "!"), "Molo Lona!")


    });

    it("should greet with name entered & selected 'English'", function () {

        let greetingsEX = Greetings()

        greetingsEX.langMessages("Andre", "English")

        assert.equal(greetingsEX.langMessages("Andre", "English", "!"), "Hello Andre!")



    });

    it("should greet with name entered & selected 'Afrikaans'", function () {

        let greetingsEX = Greetings()

        greetingsEX.langMessages("Lona", "Afrikaans")

        assert.equal(greetingsEX.langMessages("Lona", "Afrikaans", "!"), "Halo Lona!")


    });

    it("counter should return the number of names entered", function () {

        let greetingsEX = Greetings()

        greetingsEX.langMessages("Lona", "Afrikaans")
        greetingsEX.langMessages("Thimna", "English")
        greetingsEX.setName("Lona")
        greetingsEX.setName("Thimna")
        greetingsEX.counter("Lona", "Thimna")

        assert.equal(greetingsEX.counter(), 2)



    });


    it("should return message if name is not entered", function () {

        let greetingsEX = Greetings()
        greetingsEX.langMessages("", "English")
        greetingsEX.langMessages("", "Afrikaans")
        greetingsEX.langMessages("", "IsiXhosa")
        greetingsEX.errorHandling("")


        assert.equal(greetingsEX.errorHandling("", "English"), "Please enter the name")
        assert.equal(greetingsEX.errorHandling("", "Afrikaans"), "Please enter the name")
        assert.equal(greetingsEX.errorHandling("", "IsiXhosa"), "Please enter the name")

    });

    it("should return message if language is not selected", function () {

        let greetingsEX = Greetings()
        greetingsEX.langMessages("Lona", "")
        greetingsEX.langMessages("Dave", "")
        greetingsEX.langMessages("Luke", "")
        greetingsEX.errorHandling("")


        assert.equal(greetingsEX.errorHandling("Lona", ""), "Please select the language")
        assert.equal(greetingsEX.errorHandling("Dave", ""), "Please select the language")
        assert.equal(greetingsEX.errorHandling("Luke", ""), "Please select the language")

    });




    //it("should return message if language is not selected & name is not entered", function () {

    //let greetingsEX = Greetings()
    //greetingsEX.langMessages("", "")
    //greetingsEX.errorHandling("","")


    //assert.equal(greetingsEX.errorHandling("",""),"Please enter the name and select language")


    //});

    it("conter should not increase the number name is duplicated ", function () {
 
        let greetingsEX = Greetings()
        
    
        greetingsEX.setName("Lona")
        greetingsEX.setName("Lona")
        greetingsEX.counter("Lona", "Lona")
    
        greetingsEX.langMessages("lona", "English")
        greetingsEX.langMessages("lona", "English")
    
        assert.equal(greetingsEX.counter() , 1)
    
    
        
        
    
    });
});






