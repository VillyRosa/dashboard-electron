interface StatusProps {
  status: 'active' | 'inactive' | 'pending'
}

export const Status = ({ status }: StatusProps) => {
  const color = {
    active: 'green',
    inactive: 'red',
    pending: 'yellow'
  }[status]

  const text = {
    active: 'Ativo',
    inactive: 'Inativo',
    pending: 'Pendente'
  }[status]

  return (
    <div className="flex items-center gap-1">
      <div className={`
        w-2 h-2 rounded-full
        bg-${color}-400
      `} />
      <span className={`text-${color}-400`}>
        {text}
      </span>
    </div>
  )
}