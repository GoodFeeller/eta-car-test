import {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react'
import styles from './ChartContent.module.scss'
import { intervalType } from '../../../hooks/useHistory'
import useChartInfo from '../../../hooks/useChartInfo'
import Loading from '../../loading/Loading'
import LineChart from './line/LineChart'
import { IHistory } from '../../../types/IHistory'

interface IProps {
  history: IHistory[]
  interval: intervalType
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
}

const ChartContent: FunctionComponent<IProps> = ({
  history,
  interval,
  loading,
  setLoading,
}) => {
  const chartRef = useRef<HTMLDivElement>(null)
  const data = useChartInfo(history, interval, setLoading)
  const [mousePos, setMousePos] = useState<{ left: number; top: number }>({
    left: 0,
    top: 0,
  })

  useEffect(() => {
    const hoverLines = (event: MouseEvent) => {
      if (chartRef.current) {
        const c = chartRef.current.getBoundingClientRect()
        setMousePos({ left: event.clientX - c.x, top: event.clientY - c.y })
      }
    }
    const hoverLinesTouch = (event: TouchEvent) => {
      if (chartRef.current) {
        const c = chartRef.current.getBoundingClientRect()
        setMousePos({
          left: event.touches[0].clientX - c.x,
          top: event.touches[0].clientY - c.y,
        })
      }
    }
    const current = chartRef.current
    if (current) {
      current.addEventListener('mousemove', hoverLines)
      current.addEventListener('touchmove', hoverLinesTouch)
    }

    return () => {
      if (current) {
        current.removeEventListener('mousemove', hoverLines)
        current.removeEventListener('touchmove', hoverLinesTouch)
      }
    }
  })
  return (
    <div
      className={
        loading ? styles.body + ' ' + styles.noVisiableBody : styles.body
      }
    >
      <Loading />
      <div
        ref={chartRef}
        className={
          !loading ? styles.chart + ' ' + styles.noVisiable : styles.chart
        }
      >
        <div
          style={{ left: `${mousePos.left}px` }}
          className={styles.vertLine}
        />
        <div
          style={{ top: `${mousePos.top}px` }}
          className={styles.horizLine}
        />
        <LineChart data={data} />
      </div>
    </div>
  )
}
export default ChartContent
