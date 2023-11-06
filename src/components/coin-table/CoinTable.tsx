import { FunctionComponent } from 'react'
import styles from './CoinTable.module.scss'
import CoinItem from './coin-item/CoinItem'
import TableHeader from './table-header/TableHeader'
import Loading from '../loading/Loading'
import useSortCoins from '../../hooks/useSortCoins'
import useSearch from '../../hooks/useSearch'
import SearchCoin from './search-coin/SearchCoin'

const CoinTable: FunctionComponent = () => {
  const { coins, setCoins, loading, setSearch, search } = useSearch()
  const { sort, setSort } = useSortCoins(coins, setCoins, loading)
  return (
    <div className={styles.tableBody}>
      <SearchCoin search={search} setSearch={setSearch} />
      <table className={styles.tableContent}>
        <TableHeader setSort={setSort} sort={sort} />
        <tbody>
          {coins.length ? (
            coins.map((elem) => <CoinItem key={elem.rank} item={elem} />)
          ) : (
            <tr />
          )}
        </tbody>
      </table>
      {loading ? <Loading /> : <></>}
    </div>
  )
}
export default CoinTable
