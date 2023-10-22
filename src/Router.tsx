import {FunctionComponent} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainPage from "./components/pages/main-page/MainPage";
import CoinPage from "./components/pages/coin-page/CoinPage";

const Router: FunctionComponent = () => {
    return <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<MainPage/>}></Route>
            <Route path={'/coin/:id'} element={<CoinPage/>}/>
        </Routes>
    </BrowserRouter>

}
export default Router