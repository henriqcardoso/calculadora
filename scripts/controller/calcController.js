class CalcController {

    constructor(){

        this._locale = 'pt-BR';
        this.displayCalcEl = document.querySelector("#display");
        this.dateEl = document.querySelector("#data");
        this.timeEl = document.querySelector("#hora");
        this.currentDate;
        this.initialize();
    }

    initialize(){
       
        this.setDisplayDateTime();

        setInterval(()=>{

            this.setDisplayDateTime();

        }, 1000);
    }

    setDisplayDateTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this._locale,{
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);

    }
    get displayTime(){
        return this.timeEl.innerHTML;
    }

    set displayTime(value){
        return this.timeEl.innerHTML = value;
    }

    get displayDate(){
        return this.dateEl.innerHTML;
    }

    set displayDate(value){
        return this.dateEl.innerHTML = value;
    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }

    get dataAtual(){
        return new Date();
    }

    set dataAtual(value){
        this.currentDate = value;
    }


}