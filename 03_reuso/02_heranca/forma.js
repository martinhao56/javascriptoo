class Forma{
 
    constructor ( tipoDeForma = 'Forma Abstrata') {
       // this.tipoDeForma = 'Forma Abstrata';
        this.tipoDeForma = tipoDeForma;
    }
        imprimeForma() {
 
         
            //alert(`Tipo de forma: ${this.tipoDeForma}- Área: ${this.calculaArea()}`);
            //alert('Tipo de forma: ${this.tipoDeForma}' );

            try{
                alert(`tipo de forma: ${this.tipoDeForma} - área: ${this.calculaArea()}`);
                console.log("aqui");
            }catch (error){
                alert("o codigo esta com erro")
                
            }
        }
 
        calculaArea() {
            throw new Error ('O método calculaArea() deve ser implementado na subclasse.');
       
    }
}
 