import axios, { AxiosResponse } from 'axios'
import { intervalType } from '../hooks/useHistory'

const baseUrl = 'https://api.coincap.io/v2/assets/'

export interface ICoinInfo {
  id: string
  name: string
  rank: string
  symbol: string
  supply: string
  maxSupply: string
  marketCapUsd: string
  priceUsd: string
  changePercent24Hr: string
}
export interface IHistory {
  date: string
  priceUsd: string
}
interface IAssetsResponse {
  data: ICoinInfo
}
interface IHistoryResponse {
  data: IHistory[]
}

const CoinInfoService = {
  getCoin: async function (id: string): Promise<ICoinInfo> {
    try {
      const response: AxiosResponse<IAssetsResponse> = await axios.get(
        `${baseUrl}${id}`,
      )
      return response.data.data
    } catch (err) {
      throw new Error('Not found')
    }
  },
  getHistory: async function (
    id: string,
    interval: intervalType,
  ): Promise<IHistory[]> {
    try {
      const response: AxiosResponse<IHistoryResponse> = await axios.get(
        `${baseUrl}${id}/history?interval=${interval}`,
      )
      return response.data.data
    } catch (err) {
      throw new Error('Not found')
    }
  },
}
export default CoinInfoService
