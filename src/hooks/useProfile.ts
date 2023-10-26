import { useEffect, useState } from 'react'
import { IProfileCoin, IProfileTotal } from '../service/ProfileTypes'
import CoinInfoService from '../service/CoinInfoService'

function useProfile() {
  const [profile, setProfile] = useState<IProfileTotal>({
    totalPrice: 0,
    id: [],
  })
  const [nowPrice, setNowPrice] = useState<number>(0)
  useEffect(() => {
    setNowPrice(0)
    const getInfo = async (id: string) => {
      const coinStr = localStorage.getItem(id)
      if (coinStr != null) {
        const response = await CoinInfoService.getCoin(id)
        const coin: IProfileCoin = JSON.parse(coinStr)
        setNowPrice(
          (prevState) => prevState + Number(response.priceUsd) * coin.count,
        )
      }
    }
    profile.id.forEach((id) => getInfo(id))
  }, [profile])
  useEffect(() => {
    const profileHandler = () => {
      const profileStorage = localStorage.getItem('//profile//')
      if (profileStorage != null) {
        setProfile(JSON.parse(profileStorage))
      }
    }
    profileHandler()
    window.addEventListener('storage', profileHandler)
    return () => window.removeEventListener('storage', profileHandler)
  }, [])

  return { profile, nowPrice }
}
export default useProfile
