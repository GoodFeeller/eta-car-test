import {FunctionComponent, useEffect, useState} from "react";
import {IHistory} from "../../../../../service/CoinInfoService";
import {
    ChartData,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Chart,
} from "chart.js";
import {Line} from "react-chartjs-2";
import {intervalType} from "../../../../../hooks/useHistory";
Chart.register(CategoryScale, LinearScale, PointElement, LineElement,Tooltip)

interface IProps {
    history: IHistory[],
    interval: intervalType
}
function customizeDate(interval: intervalType, e: IHistory): string {
    switch(interval) {
        case "h1":
            return `${new Date(e.date).getDate()}`
        case "d1":
            return `${new Date(e.date).getMonth() + 1}.${new Date(e.date).getDate()}`
        case "m1":
            return `${new Date(e.date).getHours()}:${new Date(e.date).getMinutes()}`
        case "m15":
            return `${new Date(e.date).getDate()}.${new Date(e.date).getHours()}:00`
    }
}
const ChartContent: FunctionComponent<IProps> = ({ history, interval }) => {
    const [data, setData] = useState<ChartData<'line', number[]>>({
        labels: [],
        datasets: [
            {
                label: 'Price',
                data: [],
                borderColor: 'black',
                pointRadius: 0
            }
        ]
    })
    useEffect( () => {
        const info = history.filter( (e, i) => i % 3 === 0).map(e => Number(e.priceUsd))
        const dates = history.filter( (e, i) => i % 3 === 0).map(e => customizeDate(interval, e))
        setData({
            labels: dates,
            datasets: [
                {
                    label: 'Price',
                    data: info,
                    borderColor: 'black',
                    pointRadius: 0
                }
            ]
        })
    }, [history, interval])

    return <div>
        <Line data={data} options={{
            responsive: true,
            maintainAspectRatio: true,
            onResize(chart: Chart, size: { width: number; height: number }) {
                chart.resize(size.width, size.height)
            },
            scales: {
                y: {
                    position: 'right'
                },
                x: {
                    stack: '100',
                    stacked: true,
                    stackWeight: 10
                }
            },
            plugins: {
                tooltip: {
                    enabled: true,
                    backgroundColor: 'rgb(238,238,238)',
                    titleColor: 'black',
                    bodyColor: 'black',
                    mode: 'nearest',
                    intersect: false,
                    axis: 'x',
                    padding: 20,
                    displayColors: false,
                }
            }
        }}/>
    </div>
}
export default ChartContent