import { useState } from "react"
import './Contador.css'
import styles from '../../button.module.css'

export default function Contador(){

    const [contador, setContador] = useState(0)

    function aumentar(){
        return setContador(contador + 1)
    }

    return(
        <div className="container">
            <h2>Contador</h2>
            <h3>Contagem: {contador}</h3>
            <button className={styles.myButton} onClick={aumentar}>Aumentar</button>
        </div>
    )
}