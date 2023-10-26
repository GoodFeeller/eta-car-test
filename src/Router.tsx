import { FunctionComponent } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/main-page/MainPage'
import CoinPage from './pages/coin-page/CoinPage'
import AddProvider from './providers/AddContext'
import ProfileProvider from './providers/ProfileContext'

const Router: FunctionComponent = () => {
  return (
    <AddProvider>
      <ProfileProvider>
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<MainPage />}></Route>
            <Route path={'/coin/:id'} element={<CoinPage />} />
          </Routes>
        </BrowserRouter>
      </ProfileProvider>
    </AddProvider>
  )
}
export default Router
