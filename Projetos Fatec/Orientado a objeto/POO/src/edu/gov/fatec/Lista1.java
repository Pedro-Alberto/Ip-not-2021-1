
package edu.gov.fatec;

import javax.swing.JOptionPane;

public class Lista1 {
    int nroAluno, idade;
    String nome;
    float p1, p2;

    //Método construtorres
    
    Lista1() {
}
    Lista1 (int nroAluno, int idade, String nome, float p1, float p2){
        this.nroAluno = nroAluno;
        this.idade = idade;
        this.nome = nome;
        this.p1 = p1;
        this.p2 = p2;
        
    }

float notaFinal(){
    return (this.p1 + this.p2) / 2;
}
 String passou(){
     return (this.notaFinal() >= 6) ? "Aprovado" : "Reprovado";        
 }

 void dadosAluno(){
     JOptionPane.showMessageDialog(null, "Nome:" + this.nome + " Situação: " + this.passou());
 }
 
}