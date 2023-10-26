import { FunctionComponent } from 'react'
import styles from '../Header.module.scss'

const HeaderTitle: FunctionComponent = () => {
  return (
    <div className={styles.titleBody}>
      <img className={styles.img} src={'/title.png'} alt={''} />
      <span className={styles.title}>CoinCheckerOnline</span>
    </div>
  )
}
export default HeaderTitle
