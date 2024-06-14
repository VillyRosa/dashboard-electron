import { useEffect, useState } from "react"
import { ICustomer } from "../../interfaces/ICustomer"

export default function Clients() {
  const [customers, setCustomers] = useState<ICustomer[]>([])

  useEffect(() => {
    fetch('http://localhost:3636/customers')
      .then(response => response.json())
      .then((data: ICustomer[]) => setCustomers(data))
      .catch(error => console.error(error))
  }, [])

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Status</th>
            <th>Empresa</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer: ICustomer) => (
            <tr key={customer._id}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td>{customer.status}</td>
              <td>{customer.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}