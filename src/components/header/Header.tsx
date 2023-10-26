import { FunctionComponent } from 'react'
import HeaderTitle from './header-title/HeaderTitle'
import styles from './Header.module.scss'
import PopularCoins from './popular-coins/PopularCoins'
import Profile from './profile/Profile'

const Header: FunctionComponent = () => {
  return (
    <header className={styles.headerBody}>
      <HeaderTitle />
      <PopularCoins />
      <Profile />
    </header>
  )
}
export default Header
