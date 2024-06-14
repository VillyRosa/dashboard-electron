import { useEffect, useState } from "react";
import { DashCard } from "../../components/DashCard";
import { ICustomer } from "../../interfaces/ICustomer";

export default function Dashboard() {
  const [customers, setCustomers] = useState<ICustomer[]>([])

  useEffect(() => {
    fetch('http://localhost:3636/customers')
      .then(response => response.json())
      .then((data: ICustomer[]) => setCustomers(data))
      .catch(error => console.error(error))
  }, [])

  return (
    <>
      <div className="w-full flex items-center gap-4">
        <DashCard title="Vendas" value={3.781} />
        <DashCard title="Produtos" value={3.781} secondary />
        <DashCard title="Clientes" value={customers.length} />
        <DashCard title="Acesso" value={3.781} secondary />
      </div>
    </>
  )
}