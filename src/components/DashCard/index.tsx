interface IDashCard {
  title: string
  value: string | number
  secondary?: boolean
}

export const DashCard = ({ title, value, secondary = false }: IDashCard) => {
  return (
    <div 
      className={`
        p-6 rounded-2xl flex justify-between items-center gap-8 text-black
        ${!secondary ? 'bg-primary-blue' : 'bg-primary-purple'}
      `}
    >
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold">{title}</h3>
        <span className="font-semibold text-3xl">{value}</span>
      </div>
      <div className="mt-6">
        <span className="font-light text-sm">+100%</span>
      </div>
    </div>
  )
}