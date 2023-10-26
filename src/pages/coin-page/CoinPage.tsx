import { FunctionComponent, useContext } from 'react'
import styles from './CoinPage.module.scss'
import { Link, useParams } from 'react-router-dom'
import CoinTextInfo from '../../components/coin-text-info/CoinTextInfo'
import Loading from '../../components/loading/Loading'
import CoinInfoTitle from '../../components/coin-info-title/CoinInfoTitle'
import Chart from '../../components/chart/Chart'
import useCoinInfo from '../../hooks/useCoinInfo'
import { AddContext } from '../../providers/AddContext'
import { ProfileContext } from '../../providers/ProfileContext'
import Modal from '../../components/modal/Modal'
import AddCoinModal from '../../components/modal/add-coin-modal/AddCoinModal'
import ProfileModal from '../../components/modal/profileModal/ProfileModal'
import Header from '../../components/header/Header'

const CoinPage: FunctionComponent = () => {
  const { id } = useParams()
  const { coinInfo, notFound } = useCoinInfo(id)
  const { coin } = useContext(AddContext)
  const { show } = useContext(ProfileContext)
  return (
    <div>
      <Header />
      {id && !notFound ? (
        coinInfo ? (
          <div className={styles.body}>
            <CoinInfoTitle />
            <Chart id={id} />
            <CoinTextInfo coin={coinInfo} />
            {coin ? (
              <Modal>
                <AddCoinModal />
              </Modal>
            ) : (
              <></>
            )}
            {show ? (
              <Modal>
                <ProfileModal />
              </Modal>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <div>
            <Loading />
          </div>
        )
      ) : (
        <div className={styles.body}>
          <div>
            Error coin id! Please go to main page and choose coin! <br />
            <Link to={'/'}>Go back...</Link>
          </div>
        </div>
      )}
    </div>
  )
}
export default CoinPage
