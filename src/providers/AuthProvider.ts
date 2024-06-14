import axios from "axios";
import { IUser } from "../interfaces/IUser";

export default class AuthProvider {

  public static async login({ email, password }: { email: string, password: string }): Promise<IUser | { message: string }> {
    const response = await axios.post(
      'http://localhost:3636/login',
      { email, password },
      { headers: { 'Content-Type': 'application/json' } }
    )
    return response.data
  }

}