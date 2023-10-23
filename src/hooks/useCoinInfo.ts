import {useEffect, useState} from "react";
import CoinInfoService, {ICoinInfo} from "../service/CoinInfoService";

function useCoinInfo(id: string | undefined) {
    const [coinInfo, setCoinInfo] = useState<ICoinInfo>()
    const [notFound, setNotFound] = useState<boolean>(false)
    useEffect( () => {
        const getCoin = async () => {
            if (id != null) {
                try{
                    const response = await CoinInfoService.getCoin(id)
                    setCoinInfo(response)
                }
                catch (err) {
                    setNotFound(true)
                }
            }
        }
        getCoin()
    }, [id])
    return {coinInfo, notFound}
}
export default useCoinInfo