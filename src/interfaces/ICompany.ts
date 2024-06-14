export interface ICompany {
  _id?: string
  name: string
  cnpj: string
  status: 'active' | 'inactive'
  created_at?: string
  updated_at?: string
  __v?: number
}