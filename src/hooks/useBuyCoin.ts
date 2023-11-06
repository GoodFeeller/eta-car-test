import { IProfileCoin, IProfileTotal } from '../service/ProfileTypes'
import { useContext, useState } from 'react'
import { AddContext } from '../providers/AddContext'
import { ICoin } from '../types/ICoin'

function useBuyCoin(coin: ICoin) {
  const [count, setCount] = useState<string>('0')
  const { setCoin } = useContext(AddContext)
  const buy = () => {
    const profile = localStorage.getItem('//profile//')
    const prev = localStorage.getItem(coin.id)
    const newCoin: IProfileCoin = {
      symbol: coin.symbol,
      id: coin.id,
      count: Number(count),
      totalPrice: Number(count) * Number(coin.priceUsd),
    }
    if (prev != null) {
      const oldState: IProfileCoin = JSON.parse(prev)
      newCoin.totalPrice += oldState.totalPrice
      newCoin.count += oldState.count
    }
    localStorage.setItem(coin.id, JSON.stringify(newCoin))
    if (profile == null) {
      const newProfile: IProfileTotal = {
        id: [coin.id],
        totalPrice: newCoin.totalPrice,
      }
      localStorage.setItem('//profile//', JSON.stringify(newProfile))
    } else {
      const oldProfile: IProfileTotal = JSON.parse(profile)
      if (oldProfile.id.some((id) => id === coin.id))
        localStorage.setItem(
          '//profile//',
          JSON.stringify({
            totalPrice: oldProfile.totalPrice + newCoin.totalPrice,
            id: oldProfile.id,
          }),
        )
      else
        localStorage.setItem(
          '//profile//',
          JSON.stringify({
            totalPrice: oldProfile.totalPrice + newCoin.totalPrice,
            id: [...oldProfile.id, coin.id],
          }),
        )
    }
    setCoin(null)
    window.dispatchEvent(new Event('storage'))
  }
  return { count, setCount, buy }
}
export default useBuyCoin
