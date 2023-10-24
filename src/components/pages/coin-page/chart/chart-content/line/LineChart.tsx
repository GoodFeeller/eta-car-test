import {FunctionComponent, memo} from "react";
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
Chart.register(CategoryScale, LinearScale, PointElement, LineElement,Tooltip)
Chart.defaults.font.size = 12
const LineChart: FunctionComponent<{data: ChartData<"line", number[], unknown>}> = ({data}) => {
    return  <Line data={data} options={{
        responsive: true,
        maintainAspectRatio: false,
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
                borderColor: 'black',
                borderWidth: 1,
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
}
export default memo(LineChart)