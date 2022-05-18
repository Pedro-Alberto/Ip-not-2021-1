export default function Estilo(props){
    return(
        <div>
            <h1 style ={{backgroundColor:props.numero >= 0 ? "blue" : "red", color:"white"}}>{props.numero}</h1>
        </div>
    )
}