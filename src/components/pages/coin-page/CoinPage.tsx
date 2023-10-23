import {FunctionComponent, useContext} from "react";
import styles from './CoinPage.module.scss'
import {useParams} from "react-router-dom";
import CoinTextInfo from "./coin-text-info/CoinTextInfo";
import Loading from "../../special/loading/Loading";
import CoinInfoTitle from "./coin-info-title/CoinInfoTitle";
import Chart from "./chart/Chart";
import useCoinInfo from "../../../hooks/useCoinInfo";
import {AddContext} from "../../../providers/AddContext";
import {ProfileContext} from "../../../providers/ProfileContext";
import Modal from "../../special/modal/Modal";
import AddCoinModal from "../../special/modal/add-coin-modal/AddCoinModal";
import ProfileModal from "../../special/modal/profileModal/ProfileModal";
import Header from "../../special/header/Header";

const CoinPage: FunctionComponent = () => {
    const { id } = useParams()
    const { coinInfo, notFound } = useCoinInfo(id)
    const {coin} = useContext(AddContext)
    const {show} = useContext(ProfileContext)
    return <div>
        <Header/>
        {
            id && !notFound ?
            coinInfo ?
                <div className={styles.body}>
                    <CoinInfoTitle/>
                    <Chart id={id}/>
                    <CoinTextInfo coin={coinInfo}/>
                    {
                        coin ?
                        <Modal>
                            <AddCoinModal/>
                        </Modal>
                        :
                        <></>
                    }
                    {
                        show ?
                        <Modal>
                            <ProfileModal/>
                        </Modal>
                        :
                        <></>
                    }
                </div>
                :
                <Loading/>
                :
                <div/>
        }
        </div>
}
export default CoinPage