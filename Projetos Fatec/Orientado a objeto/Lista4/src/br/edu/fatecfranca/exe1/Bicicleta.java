
package br.edu.fatecfranca.exe1;

public class Bicicleta extends Veiculo {
    private int quadro;
    private int aro;

    public Bicicleta() {
    }

    public Bicicleta(int quadro, int aro, String modelo, String nome, int ano) {
        super(modelo, nome, ano);
        this.quadro = quadro;
        this.aro = aro;
    }

    public int getQuadro() {
        return quadro;
    }

    public void setQuadro(int quadro) {
        this.quadro = quadro;
    }

    public int getAro() {
        return aro;
    }

    public void setAro(int aro) {
        this.aro = aro;
    }

    @Override
    public String toString() {
        return "Bicicleta{" + "quadro=" + quadro + ", aro=" + aro + super.toString()+ comoMeLocomovo() + '}';
    }
    
    @Override
    public String comoMeLocomovo() {
       return "Eu me locomovo como: Pedalano";
    }
    
    
}
