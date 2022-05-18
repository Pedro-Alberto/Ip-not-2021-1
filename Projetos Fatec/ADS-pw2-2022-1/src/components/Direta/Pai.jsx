import Filho from "./Filho";

export default function Pai(props){
    return (
        <div>
            <Filho nome="Cebolinha"/>
            <Filho nome="Mauricio" sobrenome={props.sobrenome}/>
            <Filho {...props} nome="Monicao" />
        </div>
    )
}