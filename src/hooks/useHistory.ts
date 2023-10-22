import {useEffect, useState} from "react";
import CoinInfoService, { IHistory} from "../service/CoinInfoService";
export type intervalType = 'm1' | 'm15' | 'h1' | 'd1'

function useHistory(id: string) {
    const [interval, setInterval] = useState<intervalType>('m1')
    const [history, setHistory] = useState<IHistory[]>([])


    useEffect( () => {
        const getHistory = async () => {
            if (id != null) {
                try {
                    const historyResponse = await CoinInfoService.getHistory(id, interval)
                    console.log(historyResponse)
                    setHistory(historyResponse)
                }
                catch (err) {}
            }
        }
        getHistory()
    }, [interval, id])
    return {history, interval, setInterval}
}
export default useHistory