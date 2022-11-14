import Icon from 'assets/icons';
import { PaginationProps } from 'utility/typeDefinitions/componentPropTypes';

const Pagination = ({ page, setPage, array, itemsPerPage }: PaginationProps) =>
  array && array.length > itemsPerPage ? (
    <div className="flex justify-center items-center gap-4 mt-[30px]">
      <button
        className="w-[35px] h-[35px] rounded-[8px] bg-primary text-light disabled:text-light/20 disabled:bg-light/10 flex items-center justify-center"
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
        className="w-[35px] h-[35px] rounded-[8px] bg-primary text-light disabled:text-light/20 disabled:bg-light/10 flex items-center justify-center"
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
