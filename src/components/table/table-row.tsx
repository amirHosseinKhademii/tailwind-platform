import { FC, memo } from "react";
import { TableCell } from "./table-cell";

export const TableRow: FC<ITableRow> = memo(({ item, columns }) => (
  <div className="w-full border-b border-gray-200 flex items-center justify-start p-4  hover:bg-gray-100">
    {(columns || []).map((column, index) => (
      <TableCell
        key={index}
        item={item}
        index={index}
        column={column}
        columns={columns}
      />
    ))}
  </div>
));
