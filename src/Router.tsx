import {FunctionComponent} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainPage from "./components/pages/main-page/MainPage";
import CoinPage from "./components/pages/coin-page/CoinPage";
import AddProvider from "./providers/AddContext";

const Router: FunctionComponent = () => {
    return <AddProvider>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<MainPage/>}></Route>
                <Route path={'/coin/:id'} element={<CoinPage/>}/>
            </Routes>
        </BrowserRouter>
    </AddProvider>


}
export default Router