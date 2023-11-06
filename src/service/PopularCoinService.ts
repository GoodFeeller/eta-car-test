import { ICoin } from '../types/ICoin'
import trpc from './appRouter'

const PopularCoinService = {
  async getCoins(): Promise<ICoin[]> {
    try {
      const response: ICoin[] = await trpc.coin.getPopularCoins.query()
      return response
    } catch (err) {
      console.log(err)
      return []
    }
  },
}
export default PopularCoinService
