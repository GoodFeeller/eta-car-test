import {FunctionComponent} from "react";
import ChartParams from "./chart-params/ChartParams";
import useHistory from "../../../../hooks/useHistory";
import ChartContent from "./chart-content/ChartContent";

const Chart: FunctionComponent<{id: string}> = ({id}) => {
    const { history, setInterval, interval} = useHistory(id)

    return <div>
        <ChartParams setInterval={setInterval} interval={interval}/>
        <ChartContent interval={interval} history={history}/>
    </div>
}
export default Chart