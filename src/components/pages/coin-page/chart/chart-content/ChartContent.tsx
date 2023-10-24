import {Dispatch, FunctionComponent, SetStateAction, useEffect, useRef, useState} from "react";
import {IHistory} from "../../../../../service/CoinInfoService";
import styles from './ChartContent.module.scss'
import {intervalType} from "../../../../../hooks/useHistory";
import useChartInfo from "../../../../../hooks/useChartInfo";
import Loading from "../../../../special/loading/Loading";
import LineChart from "./line/LineChart";


interface IProps {
    history: IHistory[],
    interval: intervalType
    loading: boolean,
    setLoading: Dispatch<SetStateAction<boolean>>
}


const ChartContent: FunctionComponent<IProps> = ({ history, interval , loading, setLoading}) => {
    const chartRef = useRef<HTMLDivElement>(null)
    const data = useChartInfo(history, interval, setLoading)
    const [mousePos, setMousePos] = useState<{left: number, top: number}>({left: 0, top: 0})

    useEffect( () => {
        const hoverLines = (event: MouseEvent) => {
            if (chartRef.current) {
                const c = chartRef.current.getBoundingClientRect()
                setMousePos({left: event.clientX - c.x , top: event.clientY - c.y})
            }
        }
        if (chartRef.current)
            chartRef.current.addEventListener('mousemove', hoverLines)
        return () => { if (chartRef.current) chartRef.current.removeEventListener('mousemove', hoverLines) }
    })
    return <div className={loading ? styles.body + ' ' + styles.noVisiableBody : styles.body}>
        <Loading/>
        <div ref={chartRef} className={!loading ? styles.chart + ' ' + styles.noVisiable : styles.chart}>
            <div style={{left: `${mousePos.left}px`}} className={styles.vertLine}/>
            <div style={{top: `${mousePos.top}px`}} className={styles.horizLine}/>
            <LineChart data={data}/>
        </div>
    </div>

}
export default ChartContent