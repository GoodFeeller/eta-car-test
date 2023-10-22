import {FunctionComponent, useContext, useState} from "react";
import styles from '../../CoinTable.module.scss'
import {ICoin} from "../../../../../../service/CoinTableService";
import {ICoinInfo} from "../../../../../../service/CoinInfoService";
import {AddContext} from "../../../../../../providers/AddContext";

const AddCoin: FunctionComponent<{coin: ICoin | ICoinInfo}> = ( { coin } ) => {
    const [text, setText] = useState<string>(localStorage.getItem(coin.id) !== null ? 'REMOVE' : 'ADD')
    const {setCoin} = useContext(AddContext)
    const addCoin = () => {
        if (localStorage.getItem(coin.id) === null) {
            localStorage.setItem(coin.id, JSON.stringify(coin))
            setCoin(coin)
            setText('REMOVE')
        }else {
            localStorage.removeItem(coin.id)
            setText('ADD')
        }
    }
    return <button onClick={(e) => {
        e.stopPropagation()
        addCoin()
    }} className={styles.addButton}>{text}</button>
}
export default AddCoin