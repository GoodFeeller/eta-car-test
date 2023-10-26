import { FunctionComponent } from 'react'
import { IPopularCoin } from '../../../../../service/PopularCoinService'
import styles from '../PopularCoins.module.scss'
import { useNavigate } from 'react-router-dom'

const PopularCoinItem: FunctionComponent<{ coin: IPopularCoin }> = ({
  coin,
}) => {
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
