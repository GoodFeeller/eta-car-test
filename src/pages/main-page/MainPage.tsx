import { FunctionComponent, useContext } from 'react'
import CoinTable from '../../components/coin-table/CoinTable'
import Header from '../../components/header/Header'
import { AddContext } from '../../providers/AddContext'
import Modal from '../../components/modal/Modal'
import AddCoinModal from '../../components/modal/add-coin-modal/AddCoinModal'
import { ProfileContext } from '../../providers/ProfileContext'
import ProfileModal from '../../components/modal/profileModal/ProfileModal'

const MainPage: FunctionComponent = () => {
  const { coin } = useContext(AddContext)
  const { show } = useContext(ProfileContext)
  return (
    <div>
      <Header />
      <CoinTable />
      {coin ? (
        <Modal>
          <AddCoinModal />
        </Modal>
      ) : (
        <></>
      )}
      {show ? (
        <Modal>
          <ProfileModal />
        </Modal>
      ) : (
        <></>
      )}
    </div>
  )
}
export default MainPage
