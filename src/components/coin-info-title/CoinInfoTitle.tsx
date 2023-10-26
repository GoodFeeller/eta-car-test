import { FunctionComponent } from 'react'
import styles from './CoinInfoTitle.module.scss'
import { Link } from 'react-router-dom'

const CoinInfoTitle: FunctionComponent = () => {
  return (
    <div className={styles.body}>
      <Link className={styles.link} to={'/'}>
        Back
      </Link>
      <span>COIN INFO</span>
    </div>
  )
}
export default CoinInfoTitle
