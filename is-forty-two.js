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

        return isOk;
    }


}


function is(value){
    return new FortyTwoNumberManager(value);
}