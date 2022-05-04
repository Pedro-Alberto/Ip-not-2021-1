export default function Filho(props){
    return (
        <div>
        <h1>Filho - indireta</h1>
        <button onClick={props.funcao}>Chama Pai</button>
        <button onClick={()=>props.funcao(32)}>Chama Pai 2</button>
        </div>
    )
}