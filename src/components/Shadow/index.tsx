interface ShadowProps {
  center?: boolean
  children?: React.ReactNode
}

export const Shadow = ({ center = false, children }: ShadowProps) => {
  return (
    <div className={`
      absolute top-0 left-0 right-0 bottom-0 bg-black opacity-30 flex flex-col
      ${center ? 'justify-center items-center' : ''}
    `}>
      {children}
    </div>
  )
}