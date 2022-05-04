import styles from"../styles/celula.module.css"
export default function Estilo(props){
    return(
        <div style = {
            {backgroundColor: props.preta ? "black" : "white"}
        } className= {styles.celula}>
        </div>
    )
}