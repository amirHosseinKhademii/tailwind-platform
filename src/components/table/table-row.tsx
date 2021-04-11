import { useToggle } from "hooks/use-toggle";
import { FC, memo } from "react";
import { TableCell } from "./table-cell";

export const TableRow: FC<ITableRow> = memo(({ item, columns, expandable }) => {
  const { open, toggle } = useToggle();

  return (
    <div className="w-full flex flex-col border-b border-gray-200">
      <div
        onClick={() => (expandable ? toggle() : {})}
        className={`w-full flex items-center justify-start p-4   ${
          open ? "bg-cyan-100" : "hover:bg-cyan-100"
        }  ${expandable && "cursor-pointer"}`}
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
      {open && item.expand ? (
        <div className="w-full flex items-center justify-start p-4 bg-cyan-100 ">
          {item.expand()}
        </div>
      ) : null}
    </div>
  );
});
