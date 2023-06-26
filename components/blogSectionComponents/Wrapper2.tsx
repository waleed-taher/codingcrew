import { FC } from "react"

const Wrapper2: FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <div className="max-w-screen-lg px-4 mx-auto">
        {children}
    </div>
  )
}

export default Wrapper2