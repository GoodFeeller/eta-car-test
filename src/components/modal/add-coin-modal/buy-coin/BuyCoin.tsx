import { FunctionComponent, useEffect, useState } from 'react'
import styles from '../AddCoinModal.module.scss'
import useBuyCoin from '../../../../hooks/useBuyCoin'
import { ICoin } from '../../../../types/ICoin'

const BuyCoin: FunctionComponent<{ coin: ICoin }> = ({ coin }) => {
  const [error, setError] = useState<boolean>(false)
  const { count, setCount, buy } = useBuyCoin(coin)

  useEffect(
    () => setError(count.split('').some((e) => isNaN(Number.parseInt(e)))),
    [count],
  )
  return (
    <div className={styles.buyBlock}>
      <input
        name="Count"
        className={error ? styles.error : styles.correct}
        type={'text'}
        maxLength={4}
        onChange={(e) => setCount(e.target.value)}
        value={count}
      />
      <button onClick={() => buy()} disabled={error || count.length === 0}>
        Buy
      </button>
    </div>
  )
}
export default BuyCoin
