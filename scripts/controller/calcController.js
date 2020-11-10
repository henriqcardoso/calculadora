class CalcController {

    constructor(){   /*O construtor é um método especial para criar e inicializar um objeto criado a partir de uma classe.
                     Apenas um método especial com o nome constructor pode existir em uma classe.
                     O erro SyntaxError será mostrado se a classe contiver mais de um método constructor.*/

        this._locale = 'pt-BR';// var q determina o local da data e hr 
        this._displayCalcEl = document.querySelector("#display");// selecionando o display da calc
        this._dateEl = document.querySelector("#data");// selecionando a data no display da cald
        this._timeEl = document.querySelector("#hora");// selecionando hora no display da calc
        this._currentDate;
        this.initialize();
        this.initButtonsEvents()

    }

    initialize(){ // aqui está o q acontecerá assim q chamarmos CalcController
       
        this.setDisplayDateTime();

        setInterval(()=>{

            this.setDisplayDateTime();

        }, 1000);
    }

    addEventListenerAll(element, events, fn){
        events.split(' ').forEach(event => {

            element.addEventListener();

        });
    }

    initButtonsEvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index)=>{
            this.addEventListenerAll("click drag", e => {

                console.log(btn.className.baseVal.replace("btn-", ""));

            });
        });
    }



    setDisplayDateTime(){ //atribuindo hr à calculadora

        this.displayDate = this.currentDate.toLocaleDateString(this._locale,{
            day: "2-digit",
            month: "long",  //short para abreviar o mês
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);

    }

    /* td atributo privado precisa de getter e setters, p/ ser definido cm o atributo será acessado
    get é para requerir algum dado, alguem irá buscar um dado,
    set é para atribuição de valor, alguem irá tribuir algum dado, por isso os parâmetros value entre
    parênteses e utilizamos atribuição dos dados q irão entrar
     */
    get displayTime(){
        return this._timeEl.innerHTML;
    }

    set displayTime(value){
        this._timeEl.innerHTML = value;
    }



    get displayDate(){
        return this._dateEl.innerHTML;
    }

    set displayDate(value){
        this._dateEl.innerHTML = value;
    }



    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }



    get currentDate(){
        return new Date();
    }

    set currentDate(value){
        this._currentDate = value;
    }


}