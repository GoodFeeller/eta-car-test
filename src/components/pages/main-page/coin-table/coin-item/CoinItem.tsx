import {FunctionComponent, memo} from "react";
import {ICoin} from "../../../../../service/CoinTableService";
import AddCoin from "./addCoin/AddCoin";
import {useNavigate} from "react-router-dom";
import styles from '../CoinTable.module.scss'


const CoinItem: FunctionComponent<{item: ICoin}> = ({item}) => {
    const navigate = useNavigate()
    return <>
        {   Number(item.priceUsd ) > 0.01 && Number(item.marketCapUsd) > 0.01 ?
            <tr onClick={() => navigate(`/coin/${item.id}`)}>
                <td>{item.rank}</td>
                <td className={styles.imgTd}>
                    <img src={`https://assets.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`} alt={'Not found'}/>
                    {item.symbol}
                </td>
                <td>{Intl.NumberFormat("en", { style: 'currency' , currency: "USD"}).format( Number(item.priceUsd) )}</td>
                <td>{Intl.NumberFormat("en", { style: 'currency' , currency: "USD"}).format( Number(item.marketCapUsd) )}</td>
                <td>{Intl.NumberFormat("en", { maximumFractionDigits: 2}).format( Number(item.changePercent24Hr)) + '%'}</td>
                <td><AddCoin/></td>
            </tr>
            :
            <></>
        }
    </>

}
export default memo(CoinItem)
