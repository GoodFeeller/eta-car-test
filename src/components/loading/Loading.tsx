import { FunctionComponent } from 'react'
import styles from './Loading.module.scss'

const Loading: FunctionComponent = () => {
  return (
    <div className={styles.loadBody}>
      <span className={styles.loading}>Loading</span>
      <svg viewBox={'0 0 40 40'} className={styles.svg}>
        <circle className={styles.circle} cx={20} cy={20} r={18} />
      </svg>
    </div>
  )
}
export default Loading
