class QuadradoColorido extends Quadrado{
    constructor (lado,cor){
        super(lado);
        this.cor = cor;
    }
    imprimeForma() {
 
         
        //alert(`Tipo de forma: ${this.tipoDeForma}- Área: ${this.calculaArea()}`);
        //alert('Tipo de forma: ${this.tipoDeForma}' );

        try{
            alert(`tipo de forma: ${this.tipoDeForma} ${this.cor} - área: ${this.calculaArea()}`);
            console.log("aqui");
        }catch (error){
            alert("o codigo esta com erro")
            
        }
    }
}