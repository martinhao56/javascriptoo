class Quadrado extends Forma {
 
    constructor(lado){
        //super();
        //this.tipoDeForma = 'Quadrado';
        super("quadrado");
        this.lado = lado;
    }
 
    calculaArea(){
        return this.lado * this.lado;
    }
 }
 
         
 