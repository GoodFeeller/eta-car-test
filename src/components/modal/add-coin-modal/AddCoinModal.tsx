import { FunctionComponent, useContext } from 'react'
import styles from './AddCoinModal.module.scss'
import { AddContext } from '../../../providers/AddContext'
import BuyCoin from './buy-coin/BuyCoin'

const AddCoinModal: FunctionComponent = () => {
  const { coin } = useContext(AddContext)
  return (
    <>
      {coin ? (
        <div onClick={(e) => e.stopPropagation()} className={styles.content}>
          <span className={styles.title}>BUY COINS</span>
          <div className={styles.coinName}>
            <img
              src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
              alt={'Not found'}
            />
            <span>{coin.symbol}</span>
          </div>
          <span className={styles.price}>
            {Intl.NumberFormat('en', {
              style: 'currency',
              currency: 'USD',
            }).format(Number(coin.priceUsd))}
          </span>
          <BuyCoin coin={coin} />
        </div>
      ) : (
        <div>Coin Not Found!</div>
      )}
    </>
  )
}
export default AddCoinModal
