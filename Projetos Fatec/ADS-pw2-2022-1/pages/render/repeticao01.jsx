export default function init(){
    const lista =[
        'Cebolinha',
        'Cascão',
        'Monica',
        'Magali'
    ]

    function renderizarLista(){
        return lista.map((nome,i) => <li key = {i}>{nome}</li>)
    }


    /*function renderizarLista(){
        const itens = []
        for (let i = 0; i < lista.length; i++) {
            itens.push (<li key = {i}>{lista[i]}</li>)
            
        } return itens
    } */

    return (
        <ul>{renderizarLista()}</ul>
    )
    /*return (
        <>
            <li>Item #01</li>
            <li>Item #02</li>
            <li>Item #03</li>

        </>
    ) */
}