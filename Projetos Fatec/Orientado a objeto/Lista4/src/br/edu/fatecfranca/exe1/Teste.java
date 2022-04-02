
package br.edu.fatecfranca.exe1;

public class Teste {

    public static void mostra(Veiculo x){
        System.out.println(x.toString());
    }
    
    public static void main(String[] args) {
        Carro cr1 = new Carro(100,"Gasolina","Ford","Ka",2009);
        Bicicleta Bc1 = new Bicicleta(18,20, "bicicleta", "bike", 2009);
        
        mostra(cr1);
        mostra(Bc1);
    }
    
}
