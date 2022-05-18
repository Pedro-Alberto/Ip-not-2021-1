import {useRouter} from "next/router"
import Link from "next/link"


export default function init(){
    const router = useRouter()
    //console.log(router)
    const id = router.query.id
    const nome = router.query.nome
    return(
        <>
            <h1>em rotas/parametros</h1>
            <h2>id:{id}</h2>
            <h2>nome: {nome}</h2>
            <Link  href="/rotas">
                <button>Voltar</button>
                
            </Link>
        </>
    )
}