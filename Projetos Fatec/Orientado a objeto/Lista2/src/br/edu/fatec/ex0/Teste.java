
package br.edu.fatec.ex0;

public class Teste {
    
    
        
    public static void main(String[] args) {
        
        
        
        Niver obj = new Niver();
        
        obj.setDia(3);
        obj.setDia (80);
        obj.setDia (-3);
        obj.setMes  ("janeiro");
        obj.setMes  ("outono");
        
        System.out.println("Dia" + obj.getDia() + "Mes" + obj.getMes());
       
        
        Niver obj2 = new Niver(7, "janeiro");
    
        Niver obj3 = new Niver(38, "Verão");
        
    }
    
    
 
    
}


