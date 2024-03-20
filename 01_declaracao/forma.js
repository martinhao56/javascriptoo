class Forma{
    constructor(){
        this.tipoDeForma = 'Forma Abstrata';
    }

    imprimeForma(){
        //alert(`Tipo de forma: $(This.tipoDeForma)- Área: ${this.calcularArea}()}`);
        alert(`tipo de forma: ${this.tipoDeForma}`);
    }

    calculaArea(){
        throw new error('o metodo calculaArea() deve ser implementado na subclasse.');
    }
}