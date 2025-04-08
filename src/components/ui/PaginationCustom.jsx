import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const PaginationComponent = ({
  currentPage,
  totalItems,
  pageSize,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / pageSize)

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page)
    }
  }

  const getPageNumbers = () => {
    const pageNumbers = []
    const maxPagesToShow = 3

    let startPage = Math.max(1, currentPage - 1)
    const endPage = Math.min(startPage + maxPagesToShow - 1, totalPages)

    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1)
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i)
    }

    return pageNumbers
  }

  return (
    <div className="bg-white text-black py-4 px-6 rounded-lg">
      <Pagination>
        <PaginationContent className="gap-4">
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault()
                handlePageChange(currentPage - 1)
              }}
              className={`text-black hover:text-gray-600 transition-colors ${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Trang trước
            </PaginationPrevious>
          </PaginationItem>

          {getPageNumbers().map((pageNumber) => (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                href="#"
                isActive={currentPage === pageNumber}
                onClick={(e) => {
                  e.preventDefault()
                  handlePageChange(pageNumber)
                }}
                className={`text-black hover:text-gray-600 transition-colors min-w-[35px] h-[35px] flex items-center justify-center rounded ${
                  currentPage === pageNumber
                    ? "border border-gray-200"
                    : "hover:border hover:border-gray-400"
                }`}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          ))}

          {currentPage + 2 < totalPages && (
            <PaginationItem>
              <PaginationEllipsis className="text-black" />
            </PaginationItem>
          )}

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault()
                handlePageChange(currentPage + 1)
              }}
              className={`text-black hover:text-gray-600 transition-colors ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              Trang sau
            </PaginationNext>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

export default PaginationComponent
