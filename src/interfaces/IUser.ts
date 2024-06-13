export interface IUser {
  _id?: string
  name: string
  email: string
  password?: string
  role: 'admin'
  status: 'active' | 'inactive'
  createdAt?: string
  updatedAt?: string
  __v?: number
}