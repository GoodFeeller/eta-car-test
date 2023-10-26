import { FunctionComponent } from 'react'
import styles from '../ProfileModal.module.scss'

interface IProps {
  oldPrice: number
  nowPrice: number
}
const ProfileInfo: FunctionComponent<IProps> = ({ nowPrice, oldPrice }) => {
  return (
    <div className={styles.infoBlock}>
      <span className={styles.profilePrice}>
        Total price:{' '}
        {Intl.NumberFormat('en', {
          style: 'currency',
          currency: 'USD',
        }).format(nowPrice)}
      </span>
      <span
        style={
          nowPrice - oldPrice < 0
            ? { color: 'red' }
            : nowPrice - oldPrice > 0
            ? { color: 'green' }
            : { color: 'black' }
        }
        className={styles.changes}
      >
        {Intl.NumberFormat('en', {
          style: 'currency',
          currency: 'USD',
        }).format(nowPrice - oldPrice)}
      </span>
      <span
        style={
          nowPrice - oldPrice < 0
            ? { color: 'red' }
            : nowPrice - oldPrice > 0
            ? { color: 'green' }
            : { color: 'black' }
        }
      >
        {nowPrice === 0
          ? '0%'
          : Intl.NumberFormat('en', { maximumFractionDigits: 2 }).format(
              ((nowPrice - oldPrice) / nowPrice) * 100,
            ) + '%'}
      </span>
    </div>
  )
}
export default ProfileInfo
