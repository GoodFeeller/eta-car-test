import axios, { AxiosResponse } from 'axios'

const baseUrl = 'https://api.coincap.io/v2/assets'

export interface ICoin {
  id: string
  rank: string
  symbol: string
  marketCapUsd: string
  priceUsd: string
  changePercent24Hr: string
}
export interface IAssetsResponse {
  data: ICoin[]
}

const CoinTableService = {
  async getAllCoins(page: number): Promise<ICoin[]> {
    try {
      const response: AxiosResponse<IAssetsResponse> = await axios.get(
        `${baseUrl}?limit=20&offset=${(page - 1) * 20}`,
      )
      return response.data.data
    } catch (err) {
      console.log(err)
      return []
    }
  },
  async searchCoins(searchStr: string, page: number): Promise<ICoin[]> {
    try {
      const response: AxiosResponse<IAssetsResponse> = await axios.get(
        `${baseUrl}?search=${searchStr}&limit=20&offset=${(page - 1) * 20}`,
      )
      return response.data.data
    } catch (err) {
      console.log(err)
      return []
    }
  },
}
export default CoinTableService
