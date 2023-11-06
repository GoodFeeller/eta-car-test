import { useEffect, useState } from 'react'
import CoinInfoService from '../service/CoinInfoService'
import { IHistory } from '../types/IHistory'
export type intervalType = 'm1' | 'm15' | 'h1' | 'd1'

function useHistory(id: string) {
  const [interval, setNewInterval] = useState<intervalType>('m1')
  const [history, setHistory] = useState<IHistory[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    const getHistory = async () => {
      if (id != null) {
        try {
          setLoading(false)
          const historyResponse = await CoinInfoService.getHistory(id, interval)
          setHistory(historyResponse)
        } catch (err) {}
      }
    }
    getHistory()
  }, [interval, id])
  return { history, interval, setNewInterval, loading, setLoading }
}
export default useHistory
