import {Dispatch, FunctionComponent, SetStateAction} from "react";
import {sortType} from "../../../../../hooks/useSortCoins";
import styles from '../CoinTable.module.scss'

interface IProps {
    sort: sortType,
    setSort: Dispatch<SetStateAction<sortType>>
}

const TableHeader: FunctionComponent<IProps> = ({sort, setSort}) => {
    const changeSort = (property: "priceUsd" | "marketCapUsd" | "changePercent24Hr" | "rank") => {
        if (sort.property === property)
            sort.to === 'up' ? setSort({property: property, to: 'down'}) : setSort({property: property, to: 'up'})
        else setSort({property: property, to: 'up'})
    }
    return <thead>
    <tr>
        <th onClick={() => changeSort('rank')}>
            {sort.property === 'rank' ?
                sort.to === 'up' ? '# (up)' : '# (down)' : '#'}
        </th>
        <th className={styles.imgTd}>Name</th>
        <th onClick={() => changeSort('priceUsd')}>
            {sort.property === 'priceUsd' ?
                sort.to === 'up' ? 'Price (up)' : 'Price (down)' : 'Price'}
        </th>
        <th onClick={() => changeSort('marketCapUsd')}>
            {sort.property === 'marketCapUsd' ?
                sort.to === 'up' ? 'Market Cap (up)' : 'Market Cap (down)' : 'Market Cap'}
        </th>
        <th onClick={() => changeSort("changePercent24Hr")}>
            {sort.property === 'changePercent24Hr' ?
                sort.to === 'up' ? '24h% (up)' : '24h% (down)' : '24h%'}
        </th>
        <th/>
    </tr>
    </thead>
}
export default TableHeader