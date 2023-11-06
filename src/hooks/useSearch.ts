import { useEffect, useState } from 'react'
import CoinTableService from '../service/CoinTableService'
import { ICoin } from '../types/ICoin'

function useSearch() {
  const [search, setSearch] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)
  const [coins, setCoins] = useState<ICoin[]>([])
  const [end, setEnd] = useState<boolean>(false)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const getData = async () => {
      if (loading && !end) {
        const response: ICoin[] =
          search !== ''
            ? await CoinTableService.searchCoins(search, page)
            : await CoinTableService.getAllCoins(page)
        if (response.length === 0) setEnd(true)
        setCoins((prev) => [...prev, ...response])
        setPage((prevState) => prevState + 1)
        setLoading(false)
      }
    }
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])

  useEffect(() => {
    const getNewData = async () => {
      const response: ICoin[] =
        search !== ''
          ? await CoinTableService.searchCoins(search, 1)
          : await CoinTableService.getAllCoins(1)
      setEnd(response.length === 0)
      setCoins(response)
      setPage(2)
      setLoading(false)
    }
    getNewData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  useEffect(() => {
    const scrollHandler = () => {
      if (
        document.documentElement.scrollHeight -
          window.screen.height -
          window.scrollY <
          200 &&
        !loading &&
        !end
      ) {
        setLoading(true)
      }
    }
    document.addEventListener('scroll', scrollHandler)
    return () => document.removeEventListener('scroll', scrollHandler)
  })
  return { search, setSearch, setCoins, loading, coins }
}
export default useSearch
