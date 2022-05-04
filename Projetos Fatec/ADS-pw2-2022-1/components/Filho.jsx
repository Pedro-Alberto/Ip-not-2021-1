export default function Filho(props){
    return (
        <div style = {{display: "flex"}}>
            <h1>{props.nome }</h1>
            <h1>{ props.sobrenome}</h1>
        </div>
    )

}