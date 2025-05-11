import { PaginationLeft } from "../icons/pagination-left";
import { PaginationRigth } from "../icons/pagination-rigth";


type Props = {
  quantity: number;
  currentPage: number;
  prev: () => void;
  next: () => void;
  set: (page: number) => void;
};

export const PaginationFooter = ({
  quantity,
  currentPage,
  prev,
  next,
  set,
}: Props) => {
  const ITEMS_PER_PAGE = 9;
  const MAX_PAGE_BUTTONS = 5;

  const currentPageNumber = currentPage || 1;
  const totalPages = Math.ceil(quantity / ITEMS_PER_PAGE);

  let startPage = Math.max(
    1,
    currentPageNumber - Math.floor(MAX_PAGE_BUTTONS / 2),
  );
  let endPage = startPage + MAX_PAGE_BUTTONS - 1;
  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - MAX_PAGE_BUTTONS + 1);
  }

  const pages = [];
  for (let i = startPage; i <= endPage; i++) pages.push(i);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPageNumber) {
      toTop();
      set(page);
    }
  };

  const nextPage = () => {
    toTop();
    next();
  };

  const previousPage = () => {
    toTop();
    prev();
  };

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <nav>
      <ul className="flex items-center self-center justify-center -space-x-px h-10 mb-2 text-base">
        {/* Previous Button */}
        <li>
          <button
            onClick={() => {
              handlePageChange(currentPageNumber - 1);
            }}
            disabled={currentPageNumber === 1}
            className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Previous</span>
            <span onClick={previousPage}>
              <PaginationLeft />
            </span>
          </button>
        </li>
        {/* Page Number Buttons */}
        {pages.map((page) => (
          <li key={page}>
            <button
              onClick={() => {
                handlePageChange(page);
              }}
              className={`flex items-center justify-center px-4 h-10 leading-tight 
                ${
                  page === currentPageNumber
                    ? "text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                }`}
            >
              {page}
            </button>
          </li>
        ))}
        {/* Next Button */}
        <li>
          <button
            onClick={() => {
              handlePageChange(currentPageNumber + 1);
            }}
            disabled={currentPageNumber === totalPages}
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Next</span>
            <span onClick={nextPage}>
              <PaginationRigth />{" "}
            </span>
          </button>
        </li>
      </ul>
    </nav>
  );
};
