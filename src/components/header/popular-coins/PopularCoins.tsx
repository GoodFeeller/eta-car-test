import { FunctionComponent, useEffect, useState } from 'react'
import PopularCoinService, {
  IPopularCoin,
} from '../../../service/PopularCoinService'
import PopularCoinItem from './populat-coin-item/PopularCoinItem'
import styles from './PopularCoins.module.scss'

const PopularCoins: FunctionComponent = () => {
  const [coins, setCoins] = useState<IPopularCoin[]>([])
  useEffect(() => {
    const getCoins = async () => {
      const response = await PopularCoinService.getCoins()
      setCoins(response)
    }
    getCoins()
  }, [])
  return (
    <div className={styles.popularCoinsBody}>
      {coins.length !== 0 ? (
        coins.map((e) => <PopularCoinItem key={e.id} coin={e} />)
      ) : (
        <></>
      )}
    </div>
  )
}
export default PopularCoins
