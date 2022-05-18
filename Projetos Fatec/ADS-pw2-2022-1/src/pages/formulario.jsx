import { useState } from "react"

export default function unit(){
    const[valor,setValor] = useState("")
    
    function alterarValor(){
        setValor(valor + '@')
    }
    return(
        <div style={{display: "flex", flexDirection:"column"}}>
            <span>{valor}</span>
            <input type="text" value = {valor} placeholder="Digite" onChange={e => setValor(e.target.value)}/>
            <button onClick = {alterarValor}>Alterar</button>
        </div>
    )
}