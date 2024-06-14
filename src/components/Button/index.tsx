import { ButtonHTMLAttributes } from "react"

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, ...props }: IButton) => {
  return (
    <button
      className="py-4 px-6 rounded-md bg-primary-blue text-black font-semibold cursor-pointer transition-colors duration-200 ease-in-out"
      {...props}
    >
      {children}
    </button>
  )
}