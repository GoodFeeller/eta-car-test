import { FunctionComponent } from 'react'
import {
  IProfileCoin,
  IProfileTotal,
} from '../../../../../service/ProfileTypes'
import styles from '../ProfileModal.module.scss'

const ProfileCoin: FunctionComponent<{ coin: IProfileCoin }> = ({ coin }) => {
  const remove = () => {
    localStorage.removeItem(coin.id)
    const storageStr = localStorage.getItem('//profile//')
    if (storageStr != null) {
      const storage: IProfileTotal = JSON.parse(storageStr)
      const newID = storage.id.filter((id) => id !== coin.id)
      localStorage.setItem(
        '//profile//',
        JSON.stringify({
          id: newID,
          totalPrice: storage.totalPrice - coin.totalPrice,
        }),
      )
    }
    window.dispatchEvent(new Event('storage'))
  }
  return (
    <div className={styles.coinItem}>
      <div>
        <div>
          <img
            src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
            alt={'Not found'}
          />
          <span>{coin.symbol}</span>
        </div>
        <span>
          Price:{' '}
          {Intl.NumberFormat('en', {
            style: 'currency',
            currency: 'USD',
          }).format(coin.totalPrice)}
        </span>
        <span>Count: {coin.count}</span>
      </div>
      <button onClick={() => remove()}>remove</button>
    </div>
  )
}
export default ProfileCoin
