import { FunctionComponent, useContext } from 'react'
import styles from '../../CoinTable.module.scss'
import { AddContext } from '../../../../providers/AddContext'
import { ICoin } from '../../../../types/ICoin'

const AddCoin: FunctionComponent<{ coin: ICoin }> = ({ coin }) => {
  const { setCoin } = useContext(AddContext)
  const addCoin = () => {
    setCoin(coin)
  }
  return (
    <button
      onClick={(e) => {
        e.stopPropagation()
        addCoin()
      }}
      className={styles.addButton}
    >
      ADD
    </button>
  )
}
export default AddCoin
