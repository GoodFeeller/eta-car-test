import {
  createContext,
  Dispatch,
  FunctionComponent,
  PropsWithChildren,
  SetStateAction,
  useState,
} from 'react'
import { ICoin } from '../service/CoinTableService'
import { ICoinInfo } from '../service/CoinInfoService'

interface IAddContext {
  coin: ICoin | ICoinInfo | null
  setCoin: Dispatch<SetStateAction<ICoin | ICoinInfo | null>>
}
export const AddContext = createContext<IAddContext>({
  coin: null,
  setCoin: () => null,
})

const AddProvider: FunctionComponent<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const [coin, setCoin] = useState<ICoin | ICoinInfo | null>(null)
  return (
    <AddContext.Provider value={{ coin, setCoin }}>
      {children}
    </AddContext.Provider>
  )
}
export default AddProvider
