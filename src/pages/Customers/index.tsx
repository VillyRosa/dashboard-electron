import { useEffect, useState } from "react"
import { ICustomer } from "../../interfaces/ICustomer"
import { Table } from "../../components/Table"
import { Status } from "../../components/Status"
import { ActionsBar } from "../../components/ActionsBar"
import { Pagination } from "../../components/Pagination"
import Photo from '../../assets/user.png'
import CustomersProvider from '../../providers/CustomersProvider'

export default function Customers() {
  const [customers, setCustomers] = useState<ICustomer[]>([])

  useEffect(() => {
    CustomersProvider.getAll()
      .then((data: ICustomer[]) => setCustomers(data))
      .catch(error => console.error(error))
  }, [])

  return (
    <div className="flex flex-col gap-4">
      <ActionsBar />
      <Table
        headers={['Nome', 'Email', 'Telefone', 'Status']}
        lines={customers.map(customer => [
          <div className="flex gap-4">
            <img src={Photo} />
            {customer.name} 
          </div>,
          customer.email, 
          customer.phone, 
          <Status status={customer.status} />
        ])}
      />
      <div className='w-full flex justify-end items-center'>
        <Pagination 
          totalPages={5} 
          actualPage={1}
          onClick={() => {}}
        />
      </div>
    </div>
  )
}