import {FunctionComponent, useContext} from "react";
import styles from './Profile.module.scss'
import useProfile from "../../../../hooks/useProfile";
import {ProfileContext} from "../../../../providers/ProfileContext";

const Profile: FunctionComponent = () => {
    const {profile, nowPrice} = useProfile()
    const {setShow} = useContext(ProfileContext)
    return <div onClick={() => setShow(true)} className={styles.profile}>
        <span>Profile</span>
        <span>TotalPrice: {Intl.NumberFormat("en", { style: 'currency' , currency: "USD"}).format( nowPrice )}</span>
        <span style={ nowPrice - profile.totalPrice < 0 ? {color: 'red'} :
            nowPrice - profile.totalPrice > 0 ? {color: 'green'} : {color: "black"}}>
            {Intl.NumberFormat("en", { style: 'currency' , currency: "USD"}).format( nowPrice - profile.totalPrice )}
        </span>
        <span style={ nowPrice - profile.totalPrice < 0 ? {color: 'red'} :
            nowPrice - profile.totalPrice > 0 ? {color: 'green'} : {color: "black"}}>
                {
                    nowPrice === 0 ?
                        '0%'
                        :
                        Intl.NumberFormat("en", {maximumFractionDigits: 2}).format((nowPrice - profile.totalPrice) / nowPrice * 100) + '%'}
            </span>
    </div>
}
export default Profile