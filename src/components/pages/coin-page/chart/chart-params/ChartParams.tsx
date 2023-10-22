import {Dispatch, FunctionComponent, SetStateAction} from "react";
import styles from '../Chart.module.scss'
import {intervalType} from "../../../../../hooks/useHistory";

interface IProps {
    interval: intervalType,
    setNewInterval: Dispatch<SetStateAction<intervalType>>
}
const ChartParams: FunctionComponent<IProps> = ({ interval, setNewInterval}) => {
    return <div className={styles.params}>
        <span
            className={interval === 'm1' ? styles.chosenParam : styles.param}
            onClick={ () => setNewInterval("m1")}>
            1 Day
        </span>
        <span
            className={interval === 'm15' ? styles.chosenParam : styles.param}
            onClick={ () => setNewInterval("m15")}>
            7 Days
        </span>
        <span
            className={interval === 'h1' ? styles.chosenParam : styles.param}
            onClick={ () => setNewInterval("h1")}>
            1 Month
        </span>
        <span
            className={interval === 'd1' ? styles.chosenParam : styles.param}
            onClick={ () => setNewInterval("d1")}>
            1 Year
        </span>
    </div>
}
export default ChartParams