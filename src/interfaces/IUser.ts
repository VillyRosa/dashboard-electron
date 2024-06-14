import { ICompany } from "./ICompany"

export interface IUser {
  _id?: string
  name: string
  email: string
  password?: string
  role: 'admin'
  status: 'active' | 'inactive'
  company?: ICompany
  createdAt?: string
  updatedAt?: string
  __v?: number
}