interface PessoaProps{
    nome: string
    idade?: number
}

export default function Pessoa(props: PessoaProps){
    return(
        <div>
            <div>nome: {props.nome}</div>
            <div>idade: {props.idade ?? "nao informada"}</div>
        </div>
    )
}