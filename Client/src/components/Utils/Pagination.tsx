import { RootState } from "@/store/Store";
import { useSelector } from "react-redux";

interface paginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export const Pagination = ({ currentPage, totalPages, onPageChange }: paginationProps) => {
    const isDarkMode = useSelector((state: RootState) => state.config.isDarkMode);

    const getPageNumbers = () => {
        const pages = [];

        if (totalPages <= 5){
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        }
        else{
            if (currentPage <= 3){
                pages.push(1, 2, 3, "...", totalPages);
            }
            else if (currentPage >= totalPages - 2){
                pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
            }
            else{
                pages.push(1, "...", currentPage, "...", totalPages);
            }
        }

        return pages;
    }
    

  return (
    <div className="space-x-4 my-4">

        {/* Previous button */}
        <button
            onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
            disabled={currentPage == 1}
            className="text-sm px-2 py-1 font-semibold shadow-sm bg-white rounded-sm text-black cursor-pointer"
        >
            Prev
        </button>

        {
            getPageNumbers().map((page: number | string, index) => 
                typeof page === 'number' ? (
                    <button key={index}
                        onClick={() => onPageChange(page)}
                        className={`text-sm px-2 py-1 font-semibold shadow-sm rounded-sm cursor-pointer ${
                            currentPage === page ?
                            ( isDarkMode ? 'bg-[#151515] text-white border border-white' : 'bg-black text-white') :
                             'bg-white text-black'
                        }`}
                    >
                        {page}
                    </button>
                ) : (
                    <span key={index} className="">...</span>
                )
            )
        }

        <button
            onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
            disabled={currentPage == totalPages}
            className="text-sm px-2 py-1 font-semibold shadow-sm bg-white rounded-sm text-black cursor-pointer"
        >
            Next
        </button>

    </div>
  )
}
