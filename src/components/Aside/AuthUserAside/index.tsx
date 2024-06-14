import { IUser } from '../../../interfaces/IUser'
import Photo from '../../../assets/user.png'

interface AuthUserAsideProps {
  user: IUser
}

export const AuthUserAside = ({ user }: AuthUserAsideProps) => {
  return (
    <div className='w-full flex gap-2'>
      <img src={Photo} alt={user.name} />
      <h2>{user.name}</h2>
    </div>
  )
}