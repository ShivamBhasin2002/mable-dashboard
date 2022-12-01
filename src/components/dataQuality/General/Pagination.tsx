import Icon from 'assets/icons';
import { PaginationProps } from 'utility/typeDefinitions/componentPropTypes';

const Pagination = ({ page, setPage, array, itemsPerPage }: PaginationProps) =>
  array && array.length > itemsPerPage ? (
    <div className="flex justify-center items-center gap-4 mt-[.2rem] text-light">
      <button
        className="w-[2.1875rem] h-[2.1875rem] rounded-[.5rem]  text-light disabled:text-light/20  flex items-center justify-center"
        disabled={page === 1}
        onClick={() => {
          setPage((currPage) => currPage - 1);
        }}
      >
        <Icon icon="left" />
      </button>
      <div>
        Page {page}/{Math.ceil(array.length / itemsPerPage)}
      </div>
      <button
        className="w-[2.1875rem] h-[2.1875rem] rounded-[.5rem]  text-light disabled:text-light/20  flex items-center justify-center"
        disabled={page === Math.ceil(array.length / itemsPerPage)}
        onClick={() => {
          setPage((currPage) => currPage + 1);
        }}
      >
        <Icon icon="right" />
      </button>
    </div>
  ) : null;

export default Pagination;
