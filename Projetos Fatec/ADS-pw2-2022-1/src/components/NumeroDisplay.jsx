export default function NumeroDisplay(props){
    return (
        <div style={{display: "flex", 
        justifyContent: "center",
        height: "50px",
        width: "50px", 
        alignItems: "center", 
        color: "white", 
        borderRadius: "25px", 
        backgroundColor: "black",
        fontSize: "2rem",
        margin: "20px"} 
    }>{props.numero}</div>
    )
}