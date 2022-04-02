
package br.edu.fatecfranca.exe0;

public class Testa {
    
    public static void mostra(Funcionario x){
        System.out.println(x.toString());
    }

    public static void main(String[] args) {
        Assistente as1 = new Assistente(1000,100,"Fulando",2000);
        Gerente ge1 = new Gerente (20,100, "Beltrano", 4000);
        Diretor di1 = new Diretor(5000,"Onix", 102, "Ciclano", 6000);
        
        //System.out.println(as1.toString());
        //System.out.println(ge1.toString());
        //System.out.println(di1.toString());
        
        
        
        mostra(as1);
        mostra(ge1);
        mostra(di1);
    }
    
}
