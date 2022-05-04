import Filho from "./Filho"

export default function Pai(){
    function conversaPai(param){
        console.log("Msg pro Pai")
        console.log(param+3)
    }
    return (
        <div>
            <Filho funcao={conversaPai}/>
        </div>
    )
}