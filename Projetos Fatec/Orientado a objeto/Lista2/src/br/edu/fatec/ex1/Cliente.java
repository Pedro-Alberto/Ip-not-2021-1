
package br.edu.fatec.ex1;

public final class Cliente {
    private String nroConta;
    private String nroAgencia;
    private String nome;
    private float saldo;
    
    public Cliente(){}
            
    public Cliente(String nroConta, String nroAgencia, String nome, float saldo){
        this.setnroConta(nroConta);
        this.setnroAgencia(nroAgencia);
        this.setnome(nome);
        this.setSaldo(saldo);
    }
public void setnroConta(String nroConta){
    if(nroConta.length() == 8){
        if(nroConta.charAt(6)== '-'){
            this.nroConta = nroConta;
        }
        else{
            this.nroConta = "invalido";
            System.out.println("Conta deve ter digito verificador");
        }
    }
    else{
        this.nroConta = "invalido";
        System.out.println("Conta deve ter 8 digitos");
    }
}

public void setnroAgencia(String nroAgencia){
    if(nroAgencia.length() == 6){
        if(nroAgencia.charAt(4) == '-'){
            this.nroAgencia = nroAgencia;
        }
        else{
            this.nroAgencia = "invalido";
            System.out.println("Agência deve ter digito verificador");
        }
    }
    else{
        this.nroAgencia = "invalido";
        System.out.println("Conta deve ter 6 digitos");
    }
}

public void setnome(String nome){
    if (nome.length() < 30){
        this.nome = nome;
    }
    else {
        System.out.println("Nome inválido");
        this.nome = "inválido";
        
    }
}

public void setSaldo(float saldo){
    if (saldo >=0){
        this.saldo = saldo;
    }
    else{
        System.out.println("Saldo inválido");
    }
}

public void sacar(float x){
    this.setSaldo(this.saldo - x);
}
        
public void depositar(float x){
      this.setSaldo(this.saldo + x);
}     
        


public String getnroConta(){
    return this.nroConta;
}    

public String getnroAgencia(){
    return this.nroAgencia;
}  

public String getNome(){
    return this.nome;
}  

public float getsaldo(){
    return this.saldo;
}  

public void mostra(){
    System.out.println("Conta: " + this.nroConta + "Agência: " + this.nroAgencia + "Nome: " + this.nome + "Saldo: " + this.saldo);
}
        
}