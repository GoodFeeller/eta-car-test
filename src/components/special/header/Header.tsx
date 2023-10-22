import {FunctionComponent} from "react";
import HeaderTitle from "./header-title/HeaderTitle";
import styles from './Header.module.scss'
import PopularCoins from "./popular-coins/PopularCoins";

const Header: FunctionComponent = () => {
    return <header className={styles.headerBody}>
        <HeaderTitle/>
        <PopularCoins/>
    </header>
}
export default Header