type PersonColumnInfo = {
  Header: string;
  accessor: keyof PersonData;
};

type PersonData = {
  id: number;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  country: string;
  age: number;
  phone: string;
};

export type PersonColumnInfoList = PersonColumnInfo[];
