import axios, { AxiosResponse } from 'axios'

const baseUrl = 'https://api.coincap.io/v2/assets'

export interface IPopularCoin {
  id: string
  priceUsd: string
  symbol: string
}
export interface IPopularResponse {
  data: IPopularCoin[]
}

const PopularCoinService = {
  async getCoins(): Promise<IPopularCoin[]> {
    try {
      const response: AxiosResponse<IPopularResponse> = await axios.get(
        `${baseUrl}?limit=3`,
      )
      return response.data.data
    } catch (err) {
      console.log(err)
      return []
    }
  },
}
export default PopularCoinService
