import Titulo from "../../components/Titulo2";

export default function init(){
    return (
        <>
            //dessa forma não é necessario chamar o fragment
            <Titulo principal="Pagina de cadastro"
                descricao = "Pagina para gerenciar cadastro"
            /> 
            //Dessa forma é necessario chamar o fragment
            <Titulo 
                principal = "Outro Titulo " 
                descricao = "outra descrição"
                pequeno = {true}
            
            />

        </>

        
        

    )
}