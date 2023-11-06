import { FunctionComponent, useEffect, useState } from 'react'
import PopularCoinItem from './populat-coin-item/PopularCoinItem'
import styles from './PopularCoins.module.scss'
import { ICoin } from '../../../types/ICoin'
import PopularCoinService from '../../../service/PopularCoinService'

const PopularCoins: FunctionComponent = () => {
  const [coins, setCoins] = useState<ICoin[]>([])
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
