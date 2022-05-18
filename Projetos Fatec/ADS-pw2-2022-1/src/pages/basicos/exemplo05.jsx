import Titulo from "../../components/Titulo";

export default function init(){
    return (
        <>
            //dessa forma não é necessario chamar o fragment
            <Titulo /> 
            //Dessa forma é necessario chamar o fragment
            <Titulo></Titulo>
        </>
        

    )
}