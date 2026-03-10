type PaginationProps = {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
    if (totalPages <= 1) return null;
    return (

        <div className="flex gap-2 mt-8 justify-center">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
          className={`px-3 py-1 cursor-pointer rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          {index + 1}
        </button>
      ))}

    </div>

    )
};


export default Pagination;