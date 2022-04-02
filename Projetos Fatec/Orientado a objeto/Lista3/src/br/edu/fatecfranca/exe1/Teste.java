
package br.edu.fatecfranca.exe1;

import java.util.Date;

public class Teste {

    public static void main(String[] args) {
            
        Passageiro pa1 = new Passageiro("123-4", "Fulano");
        Voo vo1 = new Voo(111, "Guarulho", "Bahamas");
        Reserva re1 = new Reserva (222, new Date(), pa1, vo1);
        System.out.println(re1.mostra());
    }
        
}
