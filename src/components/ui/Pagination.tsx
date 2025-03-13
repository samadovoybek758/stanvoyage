import ReactPaginate from "react-paginate";
import arrowLeft from "../../../public/Images/gallary-left.svg";
import arrowRight from "../../../public/Images/gallary-right.svg";
import Image from "next/image";

interface PaginationProps {
  pageCount: number;
  onPageChange: (selectedPage: number) => void;
}

const Pagination = ({ pageCount, onPageChange }: PaginationProps) => {
  return (
    <ReactPaginate
      previousLabel={
        <Image alt="arrow left" width={24} height={24} src={arrowLeft} />
      }
      nextLabel={
        <Image alt="arrow left" width={24} height={24} src={arrowRight} />
      }
      breakLabel={
        <div className="h-[42px] w-[42px] flex item-center justify-center cursor-pointer bg-[#fff] rounded-lg border-[1.31px] border-transparent !text-lg">
          ...
        </div>
      }
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={({ selected }) => onPageChange(selected)}
      containerClassName="flex gap-1 justify-center mt-5 sm:mt-8 md:mt-12"
      pageClassName="pageDefaultPagination"
      activeClassName="pageDefaultPaginationActive"
      previousClassName="pagination-prev"
      nextClassName="pagination-next"
      disabledClassName="!bg-[#E1E1E1] cursor-not-allowed"
    />
  );
};

export default Pagination;
