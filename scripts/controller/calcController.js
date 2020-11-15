class CalcController {

    constructor(){   /*O construtor é um método especial para criar e inicializar um objeto criado a partir de uma classe.
                     Apenas um método especial com o nome constructor pode existir em uma classe.
                     O erro SyntaxError será mostrado se a classe contiver mais de um método constructor.*/

        this._operation = [];
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

            element.addEventListener(event, fn, false);

        });
    }

    clearAll(){ // método p/ limpar a tela do display

        this._operation = [];
    }


    clearEntry(){ // método p/limpar a ultima operaçao

        this._operation.pop();

    }

    getLastOperation(){ // método p/pegar a ultima operaçao
        return this._operation[this._operation.length-1]; //pegar ultima operação | length-1 pega o último index do array
    }

    isOperator (value) {

        return (['+','-','*','%','/'].indexOf(value) > -1);
        
    }

    addOperation(value){// método p/ add operação, no switch os dados serão inseridos e vão por parametros e entram no array pelo push abaixo

        if (isNaN(this.getLastOperation())) { 
            // string
            if (this.isOperator(value)) {
                // Trocar operador
                this._operation[this._operation.length-1] = value;

            } else {
                // outra coisa
            }
        } else {
            // Number
            let newValue = this.getLastOperation().toString() + value.toString();
            this._operation.push(newValue); //add novo valor ao array operation
        }

    }

    setError(){ // msg de erro

        this.displayCalc = "Error";
    }

    exexBtn(value){

        switch (value) {

            case 'ac':
                this.clearAll(); // caso o botao ac seja clicado limpa td dislplay
                break;
            case 'ce':
                this.clearEntry(); // caso o botao ce seja clicado limpa a ultima entrada de dados
                break;
            case 'soma':
                this.addOperation('+');
                break;
                 
            case 'subtracao':
                this.addOperation('-');
                break;

            case 'divisao':
                this.addOperation('/');
                break;

            case 'multiplicacao':
                this.addOperation('*');
                break;
                
            case 'porcento':
                this.addOperation('%');
                break;
                
            case 'igual':
                break;

            case 'ponto':
                this.addOperation('.');
                break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));// add números a operação, q no switch estão string e já mandaremos pro metodo addOperation como Interger
                break;

            default:
                this.setError();
                break;

        }
    }

    initButtonsEvents(){ // criando eventos dos botoes

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");//#buttons > g, #parts > g "pegue tds as tags g q sao filhos de buttons"

        buttons.forEach((btn, index)=>{
            this.addEventListenerAll("click drag", e => { //criando evendo de click e drag 

                let textBtn = (btn.className.baseVal.replace("btn-", ""));// imprimindo no console o botao chamando ele pela classe, e estamos substituindo btn por um espaço vazio 

                this.exexBtn(textBtn);
            });

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e =>{

                btn.stylt.cursor = "pointer";
            })
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