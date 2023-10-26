import {
  createContext,
  Dispatch,
  FunctionComponent,
  PropsWithChildren,
  SetStateAction,
  useState,
} from 'react'

interface IProfileContext {
  show: boolean
  setShow: Dispatch<SetStateAction<boolean>>
}
export const ProfileContext = createContext<IProfileContext>({
  show: false,
  setShow: () => false,
})

const ProfileProvider: FunctionComponent<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const [show, setShow] = useState<boolean>(false)
  return (
    <ProfileContext.Provider value={{ show, setShow }}>
      {children}
    </ProfileContext.Provider>
  )
}
export default ProfileProvider
