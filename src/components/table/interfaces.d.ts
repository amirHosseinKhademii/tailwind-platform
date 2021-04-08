type TColumn = {
  head?: string;
  key?: string;
  width?: string;
  check?: boolean;
  render?: any;
};

interface ITable {
  columns?: Array<TColumn>;
  className?: string;
  data?: any;
}

interface ITableCell {
  column?: any;
  index?: any;
  item?: any;
  columns?: Array<TColumn>;
}

interface ITableRow {
  item?: any;
  columns?: Array<TColumn>;
}

interface ITableHead {
  columns?: Array<TColumn>;
}
