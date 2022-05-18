import { useRouter } from "next/router"
import Link from "next/link"

export default function init(){
    const router = useRouter()
    const prod = router.query.produto
    return(
        <>
            <h1>Detalhes do produto: {prod} </h1>
            <h1>em rotas/[produto].jsx</h1>

            <Link  href="/rotas">
                <button>Voltar</button>
                
            </Link>
        </>


    )
}