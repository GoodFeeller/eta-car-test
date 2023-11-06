import { ICoin } from '../types/ICoin'
import trpc from './appRouter'

const CoinTableService = {
  async getAllCoins(page: number): Promise<ICoin[]> {
    try {
      const response: ICoin[] = await trpc.coin.getAll.query(page)
      return response
    } catch (err) {
      console.log(err)
      return []
    }
  },
  async searchCoins(searchStr: string, page: number): Promise<ICoin[]> {
    try {
      const response: ICoin[] = await trpc.coin.search.query({
        searchStr: searchStr,
        page: page,
      })
      return response
    } catch (err) {
      console.log(err)
      return []
    }
  },
}
export default CoinTableService
