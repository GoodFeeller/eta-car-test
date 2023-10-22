import {FunctionComponent} from "react";
import styles from './CoinTextInfo.module.scss'
import {ICoinInfo} from "../../../../service/CoinInfoService";

const CoinTextInfo: FunctionComponent<{coin: ICoinInfo}> = ({ coin }) => {
    return <div className={styles.body}>
        <div className={styles.nameBody}>
            <span>{coin.name}</span>
            <span>{coin.symbol}</span>
        </div>
        <div className={styles.priceBody}>
            <span>{Intl.NumberFormat("en", { style: 'currency' , currency: "USD"}).format( Number(coin.priceUsd) )}</span>
            <span>{Intl.NumberFormat("en", { maximumFractionDigits: 2}).format( Number(coin.changePercent24Hr)) + '% (1d)'}</span>
        </div>
        <div className={styles.otherInfo}>
            <span>Market Cap</span>
            <span>{Intl.NumberFormat("en", { style: 'currency' , currency: "USD"}).format( Number(coin.marketCapUsd) )}</span>
            <span>Rank</span>
            <span>{coin.rank}</span>
            <span>Supply</span>
            <span>{`${Number(coin.supply)} ${coin.symbol}`}</span>
            <span>Max Supply</span>
            <span>{`${Number(coin.maxSupply)} ${coin.symbol}`}</span>
        </div>
    </div>
}
export default CoinTextInfo