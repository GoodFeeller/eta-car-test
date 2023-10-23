import {FunctionComponent, useEffect, useState} from "react";
import styles from './ProfileModal.module.scss'
import {IProfileCoin} from "../../../../service/ProfileTypes";
import useProfile from "../../../../hooks/useProfile";
import ProfileCoin from "./profile-coin/ProfileCoin";
const ProfileModal: FunctionComponent = () => {
    const [coins, setCoins] = useState<IProfileCoin[]>([])
    const {nowPrice, profile} = useProfile()

    useEffect( () => {
        const coinsTmp: IProfileCoin[] = []
        profile.id.forEach( id => {
            const coinStr = localStorage.getItem(id)
            if (coinStr != null) coinsTmp.push(JSON.parse(coinStr))
        })
        setCoins(coinsTmp)
    }, [profile])

    return <div className={styles.content} onClick={ e => e.stopPropagation()}>
        <span className={styles.title}>PROFILE</span>
        <div className={styles.infoBlock}>
            <span className={styles.profilePrice}>Total price: {Intl.NumberFormat("en", {
                style: 'currency',
                currency: "USD"
            }).format(nowPrice)}</span>
            <span style={nowPrice - profile.totalPrice < 0 ? {color: 'red'} :
                nowPrice - profile.totalPrice > 0 ? {color: 'green'} : {color: "black"}}
                  className={styles.changes}>{Intl.NumberFormat("en", {
                style: 'currency',
                currency: "USD"
            }).format(nowPrice - profile.totalPrice)}</span>
            <span style={nowPrice - profile.totalPrice < 0 ? {color: 'red'} :
                nowPrice - profile.totalPrice > 0 ? {color: 'green'} : {color: "black"}}>
                {
                    nowPrice == 0 ?
                        '0%'
                        :
                        Intl.NumberFormat("en", {maximumFractionDigits: 2}).format((nowPrice - profile.totalPrice) / nowPrice * 100) + '%'}
            </span>
        </div>
        <div className={styles.coinsList}>
            {
                coins.map(e => <ProfileCoin key={e.id} coin={e}/>)
            }
        </div>
    </div>
}
export default ProfileModal