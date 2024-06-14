import { ButtonHTMLAttributes } from "react"

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, ...props }: IButton) => {
  return (
    <button
      className="py-4 px-6 rounded-md bg-[#E3F5FF] cursor-pointer hover:bg-[#C5E4F3] transition-colors duration-200 ease-in-out"
      {...props}
    >
      {children}
    </button>
  )
}