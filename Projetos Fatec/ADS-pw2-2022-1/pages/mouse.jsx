import { useState } from "react"

export default function init(){
    // React Hooks
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)
    // const arrayY = useState(0)
    // let y = arrayY[0]
    // let setY = arrayY[1]

    const estilo = {height:"100vh",display:"flex",
                    flexDirection:"column", justifyContent:"center",
                    alignItems: "center"
                    }
                    
    function movimento(e){
        //console.log(e.clientX, e.clientY)
        setX(e.clientX)
        setY(e.clientY)
    }

    return (
        <div style={estilo} onMouseMove={movimento}>
            <span>Coordenada X: {x} </span>
            <span>Coordenada Y: {y} </span>
        </div>
    )
}