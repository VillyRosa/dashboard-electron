interface PaginationButtonProps {
  active?: boolean
  children: React.ReactNode
  onClick: () => void
}

export const PaginationButton = ({ active = false, children, onClick }: PaginationButtonProps) => {
  return (
    <button 
      className={`
        ${active ? 'bg-light-background-secondary dark:bg-dark-background-secondary' : ''}
        w-8 h-8 flex justify-center items-center rounded-md hover:bg-light-background-secondary dark:hover:bg-dark-background-secondary transition-colors duration-200`          
      }
      onClick={onClick}
    >
      {children}
    </button>
  )
}