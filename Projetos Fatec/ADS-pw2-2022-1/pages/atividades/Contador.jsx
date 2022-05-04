import {useState} from "react"

export default function unit(){
const [valor, setValor] = useState(0)

    function Adicao(){
        setValor(valor + 1)
    }

    function Subtracao(){
        setValor(valor - 1)
    }


    
    return(
        <>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1>Contador</h1>
            <h1>{valor}</h1>

        </div>
        
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <button onClick={Adicao}>+</button>
        <button onClick={Subtracao}>-</button>
        </div>
        
        
        </>
    )
}


//flex-direction: row;
 //   align-items: center;
//}