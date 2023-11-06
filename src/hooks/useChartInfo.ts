import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { ChartData } from 'chart.js/auto'
import { intervalType } from './useHistory'
import { IHistory } from '../types/IHistory'

function customizeDate(interval: intervalType, e: IHistory): string {
  switch (interval) {
    case 'h1':
      return `${new Date(e.date).getDate()}`
    case 'd1':
      return `${new Date(e.date).getMonth() + 1}.${new Date(e.date).getDate()}`
    case 'm1':
      return `${new Date(e.date).getHours()}:${new Date(e.date).getMinutes()}`
    case 'm15':
      return `${new Date(e.date).getDate()}.${new Date(e.date).getHours()}:00`
  }
}
function useChartInfo(
  history: IHistory[],
  interval: intervalType,
  setLoading: Dispatch<SetStateAction<boolean>>,
) {
  const [data, setData] = useState<ChartData<'line', number[]>>({
    labels: [],
    datasets: [
      {
        label: 'Price',
        data: [],
        borderColor: 'black',
        pointRadius: 0,
        fill: true,
        backgroundColor: 'red',
      },
    ],
  })
  useEffect(() => {
    const info = history
      .filter((e, i) => i % 3 === 0)
      .map((e) => Number(e.priceUsd))
    const dates = history
      .filter((e, i) => i % 3 === 0)
      .map((e) => customizeDate(interval, e))
    setData({
      labels: dates,
      datasets: [
        {
          label: 'Price',
          data: info,
          borderColor: 'black',
          pointRadius: 0,
          borderWidth: 1,
          fill: 100,
          backgroundColor: 'red',
        },
      ],
    })
    setLoading(true)
  }, [history, interval, setLoading])
  return data
}
export default useChartInfo
