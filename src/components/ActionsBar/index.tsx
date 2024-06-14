import { Link } from 'react-router-dom'
import { Plus } from '../Icons/Plus'
import { Filter } from '../Icons/Filter'
import { ArrowsUpDown } from '../Icons/ArrowsUpDown'
import { SearchInput } from '../SearchInput'
import { useState } from 'react'

interface ActionsBarProps {

}

export const ActionsBar = ({  }: ActionsBarProps) => {
  const [search, setSearch] = useState('')

  return (
    <div className='w-full bg-light-background-secondary py-3 px-4 rounded-md flex items-center justify-between dark:bg-dark-background-secondary'>
      <div className='flex gap-4'>
        <Link to='/customers/create' className='w-6 h-6'>
          <button>
            <Plus />
          </button>
        </Link>
        <button className='w-6 h-6'>
          <Filter />
        </button>
        <button className='w-6 h-6'>
          <ArrowsUpDown />
        </button>
      </div>
      <div className='w-2/12'>
        <SearchInput 
          value={search}
          onChange={(e) => setSearch(e.target.value)} 
        />
      </div>
    </div>
  )
}