import { FunctionComponent } from 'react'
import styles from '../PopularCoins.module.scss'
import { useNavigate } from 'react-router-dom'
import { ICoin } from '../../../../types/ICoin'

const PopularCoinItem: FunctionComponent<{ coin: ICoin }> = ({ coin }) => {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate(`/coin/${coin.id}`)}
      className={styles.coinItem}
    >
      <img
        src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
        alt={'Not found'}
      />
      <span>{coin.symbol}</span>
      <span>
        {Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(
          Number(coin.priceUsd),
        )}
      </span>
    </div>
  )
}
export default PopularCoinItem
