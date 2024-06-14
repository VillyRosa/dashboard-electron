import { ChevronLeft } from "../Icons/ChevronLeft"
import { ChevronRight } from "../Icons/ChevronRight"
import { PaginationButton } from "./PaginationButton"

interface PaginationProps {
  totalPages: number
  actualPage: number
  onClick: () => void
}

export const Pagination = ({ totalPages, actualPage, onClick }: PaginationProps) => {
  return (
    <div className="flex items-center gap-2">
      <PaginationButton onClick={onClick}>
        <ChevronLeft />
      </PaginationButton>
      {
        Array.from({ length: totalPages }, (_, index) => (
          <PaginationButton key={index} active={actualPage === index} onClick={onClick}>
            {index + 1}
          </PaginationButton>
        ))
      }
      <PaginationButton onClick={onClick}>
        <ChevronRight />
      </PaginationButton>
    </div>
  )
}