import {FC} from 'react';

type GlobalFilterProps = {
    filter: string;
    setFilter: () => void;
}


const GlobalFilter: FC<GlobalFilterProps> = ({filter, setFilter}) => {

  return (
    <>
      <span>Search: {""}</span>
      <input value={filter || ""} onChange={(e) => setFilter(e.target.value)} />
    </>
  );
}

export default GlobalFilter