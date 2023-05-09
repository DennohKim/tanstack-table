import { FC } from "react";

type ColumnFilterProps = {
 column: any
};

const ColumnFilter: FC<ColumnFilterProps> = ({ column }) => {

    const {filterValue, setFilter}=column
  return (
    <>
      <span>Search: {""}</span>
      <input value={filterValue || ""} onChange={(e) => setFilter(e.target.value)} />
    </>
  );
};

export default ColumnFilter;
