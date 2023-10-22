import {FunctionComponent} from "react";
import styles from './CoinPage.module.scss'
import {useParams} from "react-router-dom";
import CoinTextInfo from "./coin-text-info/CoinTextInfo";
import Loading from "../../special/loading/Loading";
import CoinInfoTitle from "./coin-info-title/CoinInfoTitle";
import Chart from "./chart/Chart";
import useCoinInfo from "../../../hooks/useCoinInfo";

const CoinPage: FunctionComponent = () => {
    const { id } = useParams()
    const { coin, notFound } = useCoinInfo(id)
    return <>
        {
            id && !notFound ?
            coin ?
                <div className={styles.body}>
                    <CoinInfoTitle/>
                    <Chart id={id}/>
                    <CoinTextInfo coin={coin}/>
                </div>
                :
                <Loading/>
                :
                <div/>
        }
        </>
}
export default CoinPage