import {
  createContext,
  Dispatch,
  FunctionComponent,
  PropsWithChildren,
  SetStateAction,
  useState,
} from 'react'
import { ICoin } from '../types/ICoin'

interface IAddContext {
  coin: ICoin | null
  setCoin: Dispatch<SetStateAction<ICoin | null>>
}
export const AddContext = createContext<IAddContext>({
  coin: null,
  setCoin: () => null,
})

const AddProvider: FunctionComponent<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const [coin, setCoin] = useState<ICoin | null>(null)
  return (
    <AddContext.Provider value={{ coin, setCoin }}>
      {children}
    </AddContext.Provider>
  )
}
export default AddProvider
