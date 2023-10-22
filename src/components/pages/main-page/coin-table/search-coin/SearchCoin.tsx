import {Dispatch, FunctionComponent, SetStateAction} from "react";
import styles from './SearchCoin.module.scss'

interface IProps {
    search: string,
    setSearch: Dispatch<SetStateAction<string>>
}
const SearchCoin: FunctionComponent<IProps> = ({setSearch, search}) => {
    return <input className={styles.searchBody} type="text" value={search} onChange={ e => setSearch(e.target.value)} placeholder={'Coin name...'}/>
}
export default SearchCoin