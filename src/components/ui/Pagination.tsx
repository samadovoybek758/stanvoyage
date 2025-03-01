import React from "react";

interface PaginationProps {
  count: number;
  pagination: number;
  setPagination: (pagination: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  count,
  pagination,
  setPagination,
}) => {
  const generatePages = () => {
    const pages: (number | string)[] = [];
    const visibleRange = 2; // Faol sahifa atrofida nechta sahifa ko'rinadi

    for (let i = 1; i <= count; i++) {
      if (
        i === 1 ||
        i === count ||
        (i >= pagination - visibleRange && i <= pagination + visibleRange)
      ) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }
    return pages;
  };

  return (
    <ul className="flex gap-2 items-center">
      <li>
        <button
          onClick={() => setPagination(Math.max(1, pagination - 1))}
          disabled={pagination === 1}
          className={`w-10 h-10 rounded-md flex items-center justify-center transition-all duration-200 ${
            pagination === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          {"<"}
        </button>
      </li>
      {generatePages().map((page, index) => (
        <li key={index}>
          {page === "..." ? (
            <span className="px-2 text-gray-500">{page}</span>
          ) : (
            <button
              className={`w-10 h-10 rounded-md flex items-center justify-center transition-all duration-200 ${
                pagination === page
                  ? "bg-blue-700 text-white font-bold"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => setPagination(page as number)}
            >
              {page}
            </button>
          )}
        </li>
      ))}
      <li>
        <button
          onClick={() => setPagination(Math.min(count, pagination + 1))}
          disabled={pagination === count}
          className={`w-10 h-10 rounded-md flex items-center justify-center transition-all duration-200 ${
            pagination === count
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          {">"}
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
