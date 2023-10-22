import {FunctionComponent, PropsWithChildren, useContext} from "react";
import styles from './Modal.module.scss'
import {AddContext} from "../../../providers/AddContext";

const Modal: FunctionComponent<PropsWithChildren<unknown>> = ( {children} ) => {
    const {setCoin} = useContext(AddContext)
    return <div onClick={() => setCoin(null)} className={styles.modalBody}>
        {children}
    </div>
}
export default Modal