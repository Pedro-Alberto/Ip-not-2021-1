export default function inicio(){
    const subtitulo = "estou no subtitulo"
    const resposta = maior_idade(15)
    const conteudo = (
        <div>
            <h1>Ola mundo JSX</h1>
            <h2>{subtitulo}</h2>
            <h2> 3 + 3</h2>
            <h2>{3+3}</h2>
            <h2>{maior_idade(20)}</h2>
            <h2>Resposta: {resposta}</h2>
        </div>
    )
    return conteudo
}

function maior_idade(idade){
    if (idade >=18){
        return `Vc é maior de idade = ${idade}`
    }
    else{
        return "Vc é menor de idade"
    }
}