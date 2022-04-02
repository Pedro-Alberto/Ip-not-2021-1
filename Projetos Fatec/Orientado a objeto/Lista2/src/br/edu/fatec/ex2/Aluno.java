
package br.edu.fatec.ex2;

public final class Aluno {
    private int nroAluno, idade;
    private float p1,p2;
    private String nome;
    
    
    public Aluno (){
        
    }
    public Aluno (int nroAluno, int idade, float p1, float p2, String nome){
        this.setNroAluno(nroAluno);
    }
    public void setNroAluno(int nroAluno){
        if (String.valueOf(nroAluno).length()== 6){
            this.nroAluno = nroAluno;
        }
        else {
            System.out.println("Nro do aluno inválido");
            this.nroAluno = 0;
        }
    }
    
    public void setIdade (int idade){
        if(idade >=0){
            this.idade = idade;
        }
        else {
            System.out.println("Idade Inválida");
        }
    }
    
    public void setP1 (float p1){
        if(p1 >= 0){
            this.p1 = p1;
        }
        else {
            System.out.println("Nota inválida");
        }
    }
    
    public void setP2 (float p2){
        if(p2 >= 0){
            this.p2 = p2;
        }
        else {
            System.out.println("Nota inválida");
        }
    }
    
    public void notaFinal(float x){
        if((x + x) >= 6){
            System.out.println("Você esta aprovado");
        }
        else{
            System.out.println("Você foi reprovado");
        }
    }
    
    
    public int getnroAluno(){
        return this.nroAluno;
    }
    
    public int getidade(){
        return this.idade;
    }
    
    public float getp1(){
        return this.p1;
    }
    
    public float getp2(){
        return this.p2;
    }
    
    public String getnome(){
        return this.nome;
    }
    
    public void dadosAluno(){
    System.out.println("Aluno: " + this.nroAluno + "Idade: " + this.idade + "Nome: "+ this.nome + "Nota 1: " + this.p1 + "Nota 2: " + this.p2);
}
    
}
