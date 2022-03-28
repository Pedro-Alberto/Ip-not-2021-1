function lista(){
    const tmp=[
        <span>1,</span>,
        <span>2,</span>,
        <span>3,</span>
    ]
    return tmp
}

function lista2(n){
    const tmp=[]
    for (let i=0;i<=n;i++){
        tmp.push(<span>{i},</span>)
    }
    return tmp
}
export default function init(){
    return (
        <div>
            <div>
                {lista2(5)}
            </div>
            <div>
                {lista2(10)}
            </div>
        </div>
    )
}