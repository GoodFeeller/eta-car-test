import { useEffect, useState } from 'react'
import CoinInfoService from '../service/CoinInfoService'
import { ICoin } from '../types/ICoin'

function useCoinInfo(id: string | undefined) {
  const [coinInfo, setCoinInfo] = useState<ICoin>()
  const [notFound, setNotFound] = useState<boolean>(false)
  useEffect(() => {
    const getCoin = async () => {
      if (id != null) {
        try {
          const response = await CoinInfoService.getCoin(id)
          setCoinInfo(response)
        } catch (err) {
          setNotFound(true)
        }
      }
    }
    getCoin()
  }, [])
  return { coinInfo, notFound }
}
export default useCoinInfo
