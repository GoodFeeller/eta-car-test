import { FunctionComponent, useContext } from 'react'
import CoinTable from './coin-table/CoinTable'
import Header from '../../special/header/Header'
import { AddContext } from '../../../providers/AddContext'
import Modal from '../../special/modal/Modal'
import AddCoinModal from '../../special/modal/add-coin-modal/AddCoinModal'
import { ProfileContext } from '../../../providers/ProfileContext'
import ProfileModal from '../../special/modal/profileModal/ProfileModal'

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
