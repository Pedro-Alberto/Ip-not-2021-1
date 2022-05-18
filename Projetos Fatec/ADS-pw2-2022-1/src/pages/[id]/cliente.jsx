import { useRouter } from "next/router";

export default function init(){
    const router = useRouter()
    const idx = router.query.id
    return(
        <div>
            <h1>em [id]/cliente.jsx</h1>
            <h1>em {idx}/cliente.jsx</h1>
            <h1>Olá {idx} seja bem-vindo</h1>
        </div>
    )
}