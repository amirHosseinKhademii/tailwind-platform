import { FC, memo } from "react";
import { classNames } from "utils";
import { useToggle } from "hooks";

import { TableCell } from "../table-cell";

export const TableRow: FC<ITableRow> = memo(({ item, columns, expand }) => {
  const { open, toggle } = useToggle();

  return (
    <div className="w-full flex flex-col border-b border-gray-200 bg-white">
      <div
        onClick={() => (expand ? toggle() : {})}
        className={classNames(
          "w-full row-start p-4 ",
          open ? "bg-cyan-100" : "hover:bg-cyan-100",
          expand && "cursor-pointer"
        )}
      >
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
      {open && expand ? (
        <div className="w-full row-start p-4 bg-cyan-100 ">{expand(item)}</div>
      ) : null}
    </div>
  );
});
