import axios from "axios";
import { ICustomer } from "../interfaces/ICustomer";

export default class CustomersProvider {

  public static async getAll(): Promise<ICustomer[]> {
    const response = await axios.get(
      'http://localhost:3636/customers',
      { headers: { 'Content-Type': 'application/json' } }
    )
    return response.data
  }

  public static async getById(id: string): Promise<ICustomer> {
    const response = await axios.get(
      `http://localhost:3636/customers/${id}`,
      { headers: { 'Content-Type': 'application/json' } }
    )
    return response.data
  }

  public static async create(customer: ICustomer): Promise<ICustomer> {
    const response = await axios.post(
      'http://localhost:3636/customers',
      customer,
      { headers: { 'Content-Type': 'application/json' } }
    )
    return response.data
  }

  public static async update(customer: ICustomer): Promise<ICustomer> {
    const response = await axios.put(
      `http://localhost:3636/customers/${customer._id}`,
      customer,
      { headers: { 'Content-Type': 'application/json' } }
    )
    return response.data
  }

  public static async delete(id: string): Promise<ICustomer> {
    const response = await axios.delete(
      `http://localhost:3636/customers/${id}`,
      { headers: { 'Content-Type': 'application/json' } }
    )
    return response.data
  }

}