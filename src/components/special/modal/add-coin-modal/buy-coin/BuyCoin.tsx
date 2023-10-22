import {FunctionComponent, useState} from "react";
import styles from '../AddCoinModal.module.scss'

const BuyCoin: FunctionComponent = () => {
    const [count, setCount] = useState<string>('')

    return <div className={styles.buyBlock}>
        <input type={'text'} onChange={ e => setCount(e.target.value)} value={count}/>
        <button>Buy</button>
    </div>
}
export default BuyCoin