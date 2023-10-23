import {FunctionComponent, useContext} from "react";
import styles from '../../CoinTable.module.scss'
import {ICoin} from "../../../../../../service/CoinTableService";
import {ICoinInfo} from "../../../../../../service/CoinInfoService";
import {AddContext} from "../../../../../../providers/AddContext";

const AddCoin: FunctionComponent<{coin: ICoin | ICoinInfo}> = ( { coin } ) => {
    const {setCoin} = useContext(AddContext)
    const addCoin = () => {
            setCoin(coin)
    }
    return <button onClick={(e) => {
        e.stopPropagation()
        addCoin()
    }} className={styles.addButton}>ADD</button>
}
export default AddCoin