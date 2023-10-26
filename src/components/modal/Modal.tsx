import { FunctionComponent, PropsWithChildren, useContext } from 'react'
import styles from './Modal.module.scss'
import { AddContext } from '../../providers/AddContext'
import { ProfileContext } from '../../providers/ProfileContext'

const Modal: FunctionComponent<PropsWithChildren<unknown>> = ({ children }) => {
  const { setCoin } = useContext(AddContext)
  const { setShow } = useContext(ProfileContext)
  return (
    <div
      onClick={() => {
        setCoin(null)
        setShow(false)
      }}
      className={styles.modalBody}
    >
      {children}
    </div>
  )
}
export default Modal
