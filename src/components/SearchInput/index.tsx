import { MagnifyinGlass } from "../MagnifyinGlass"

interface SearchInputProps {
  value: string | number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchInput = ({ value, onChange }: SearchInputProps) => {
  return (
    <div className='w-full py-1 px-2 bg-light-background-primary border border-light-background-tertiary rounded-md flex justify-between gap-2 dark:bg-dark-background-primary dark:border-dark-background-tertiary'>
      <MagnifyinGlass />
      <input
        className='w-full outline-none bg-transparent'
        type='text' 
        placeholder='Buscar' 
        value={value}
        onChange={onChange}
      />
    </div>
  )
}