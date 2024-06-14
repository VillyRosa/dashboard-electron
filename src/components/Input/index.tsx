import { InputHTMLAttributes, useState } from "react"
import { EyeSlash } from "../Icons/EyeSlash"
import { Eye } from "../Icons/Eye"

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export const Input = ({ label, ...props }: IInput) => {
  const [inputType, setInputType] = useState(props.type === 'password' ? 'password' : props.type)

  function togglePasswordVisibility() {
    setInputType((prevType) => (prevType === 'password' ? 'text' : 'password'))
  }

  return (
    <div className="w-full flex flex-col gap-2">
      <label className="w-full font-semibold" htmlFor={props.id}>
        {label}
      </label>
      <div className="w-full p-2 border border-slate-200 rounded-md flex items-center">
        <input 
          className="w-full bg-transparent border-none outline-none"
          {...props}
          type={inputType}
        />
        {props.type === 'password' && (
          <button type="button" onClick={togglePasswordVisibility}>
            {inputType === 'password' ? <Eye /> : <EyeSlash />}
          </button>
        )}
      </div>
    </div>
  )
}