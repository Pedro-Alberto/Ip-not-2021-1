
package br.edu.fatecfranca.exe1;

public class Carro extends Veiculo {
    private float potencia;
    private String combustivel;

    public Carro() {
    }

    public Carro(float potencia, String combustivel, String modelo, String nome, int ano) {
        super(modelo, nome, ano);
        this.potencia = potencia;
        this.combustivel = combustivel;
    }

    public float getPotencia() {
        return potencia;
    }

    public void setPotencia(float potencia) {
        this.potencia = potencia;
    }

    public String getCombustivel() {
        return combustivel;
    }

    public void setCombustivel(String combustivel) {
        this.combustivel = combustivel;
    }

    @Override
    public String toString() {
        return "Carro{" + "potencia=" + potencia + ", combustivel=" + combustivel + super.toString() + comoMeLocomovo() + '}'; 
    }

    @Override
    public String comoMeLocomovo() {
       return "Eu me locomovo como: Dirigindo ";
    }
    
    
    
}
