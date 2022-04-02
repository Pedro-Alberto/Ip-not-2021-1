
package br.edu.fatecfranca.exe0;

public class Gerente extends Funcionario {
    private float comissao ;

    public Gerente() {
    }

    public Gerente(float comissao, int nro, String nome, float salario) {
        super(nro, nome, salario);
        this.comissao = comissao;
    }

    public float getComissao() {
        return comissao;
    }

    public void setComissao(float comissao) {
        this.comissao = comissao;
    }

    @Override
    public String toString() {
        return "Gerente{" + "comissao=" + comissao + "Salario final" + calculaSalarioFinal() +'}';
    }
    
    @Override
    public float calculaSalarioFinal(){
        return this.salario + (this.salario * this.comissao/100);
    }
    
    
}
