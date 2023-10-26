import { FunctionComponent, useEffect, useState } from 'react'
import styles from './ProfileModal.module.scss'
import { IProfileCoin } from '../../../service/ProfileTypes'
import useProfile from '../../../hooks/useProfile'
import ProfileCoin from './profile-coin/ProfileCoin'
import ProfileInfo from './profile-info/ProfileInfo'
const ProfileModal: FunctionComponent = () => {
  const [coins, setCoins] = useState<IProfileCoin[]>([])
  const { nowPrice, profile } = useProfile()

  useEffect(() => {
    const coinsTmp: IProfileCoin[] = []
    profile.id.forEach((id) => {
      const coinStr = localStorage.getItem(id)
      if (coinStr != null) coinsTmp.push(JSON.parse(coinStr))
    })
    setCoins(coinsTmp)
  }, [profile])

  return (
    <div className={styles.content} onClick={(e) => e.stopPropagation()}>
      <span className={styles.title}>PROFILE</span>
      <ProfileInfo oldPrice={profile.totalPrice} nowPrice={nowPrice} />
      <div className={styles.coinsList}>
        {coins.map((e) => (
          <ProfileCoin key={e.id} coin={e} />
        ))}
      </div>
    </div>
  )
}
export default ProfileModal
