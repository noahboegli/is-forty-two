class FortyTwoNumberManager{
    constructor(value){
        this.value = value;
        this.type = "strict";
        return this;
    }

    minus(value){
        this.value -= value;
        return this;
    }

    plus(value){
        this.value += value;
        return this;
    }

    times(value){
        this.value *= value;
        return this;
    }
    
    dividedBy(value){
        this.value = this.value / value;
        return this;
    }

    theYearTheAgeOfPeopleBornThisYearIs(){
        this.value = new Date().getFullYear() - this.value;
        return this;
    }

    theAnswerTwo(equation){
        this.value = equation;
        this.type = "equation";
        return this;
    }

    roughly(){
        this.type = "rough";
        return this;
    }

    multipleOf(){
        this.type = "multipleof";
        return this;
    }

    containing(){
        this.type = "containing"
        return this;
    }

    theInvertedDigitsOf(){
        this.type = "invert-digits"
        return this;
    }
        

    FortyTwo(){   
        var isOk = false;   
        if(this.type == "strict" && this.value % 42 == 0 && this.value - 42 == 0 && this.value == 42){
            isOk = true;
        }

        if(this.type == "rough" && this.value > 41 && this.value < 43){
            isOk = true;
        }

        if(this.type == "multipleof" && this.value % 42 == 0){
            isOk = true;
        }

        if(this.type == "containing" && this.value.toString().match("(42)")){
            isOk = true;
        }

        if(this.type == "invert-digits" && this.value.toString().split('')[0] == 2 && this.value.toString().split('')[1] == 4){
            isOk = true;
        }

        if(this.type == "equation"){
            var leftSide = this.value.toString().split("=")[0];
            var rightSide = this.value.toString().split("=")[1];
            leftSide = leftSide.replace("x", "42");
            rightSide = rightSide.replace("x", "42");
            if(eval(leftSide) == eval(rightSide))
                isOk = true;                
        }

        return isOk;
    }


}


function is(value = 42){
    return new FortyTwoNumberManager(value);
}