import { Pagination } from "components";
import { FC, memo } from "react";
import { TableHead } from "./table-head";
import { TableRow } from "./table-row";

export const Table: FC<ITable> = memo(({ className, columns, data }) => {
  return (
    <div className={`w-full flex flex-col items-start mt-10 p-6 ${className}`}>
      <TableHead columns={columns} />
      {(data || []).map((item, index) => (
        <TableRow key={index} item={item} columns={columns} />
      ))}
      <Pagination className="mt-10 ml-10" total={data.length} page={1} />
    </div>
  );
});