class CalcController {

    constructor(){

        this._displayCalc = "0";
        this.currentDate;
        this.initialize();
    }

    initialize(){
        
        let displayCalcEl = document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");

        displayCalcEl.innerHTML = "4567";
        dateEl.innerHTML = "25/10/2020";
        timeEl.innerHTML = "00:01";


    }

    get displayCalc(){
        return this._displayCalc;
    }

    set displayCalc(valor){
        this._displayCalc = valor;
    }

    get dataAtual(){
        return this.currentDate;
    }

    set dataAtual(valor){
        this.currentDate = valor;
    }


}