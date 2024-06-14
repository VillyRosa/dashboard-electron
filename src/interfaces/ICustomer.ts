import { ICompany } from "./ICompany"

export interface ICustomer {
  _id?: number
  name: string
  email: string
  phone: string
  status: 'active' | 'inactive'
  company: ICompany
  created_at?: string
  updated_at?: string
}