import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { ICoin } from '../types/ICoin'

export type sortType = {
  property: 'priceUsd' | 'marketCapUsd' | 'changePercent24Hr' | 'rank'
  to: 'up' | 'down'
}
function useSortCoins(
  coins: ICoin[],
  setCoins: Dispatch<SetStateAction<ICoin[]>>,
  loading: boolean,
) {
  const [sort, setSort] = useState<sortType>({ property: 'rank', to: 'up' })
  const sortFunc = useCallback(
    (a: ICoin, b: ICoin) => {
      if (Number(a[sort.property]) < Number(b[sort.property])) {
        if (sort.to === 'up') return -1
        else return 1
      } else if (Number(a[sort.property]) > Number(b[sort.property])) {
        if (sort.to === 'up') return 1
        else return -1
      } else return 0
    },
    [sort],
  )

  useEffect(() => {
    const tempCoins = [...coins]
    tempCoins.sort(sortFunc)
    setCoins(tempCoins)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort, sortFunc, loading])
  return { sort, setSort }
}
export default useSortCoins
