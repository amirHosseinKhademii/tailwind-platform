import { FC, memo, useCallback, useState } from "react";
import { Check } from "components";
import { useTableCell } from "./use-table-cell";

export const TableCell: FC<ITableCell> = memo(
  ({ column, index, item, columns }) => {
    const { handleCheck, checkList } = useTableCell();

    return (
      <div
        slot="wrapper"
        className={`flex items-center ${column.width} ${
          index === columns.length - 1 ? " justify-end" : "justify-start"
        }`}
      >
        {column.checkable && (
          <Check
            checked={checkList.find((it) => it === item.id) ? true : false}
            onClick={handleCheck(item.id)}
            className="mr-2"
          />
        )}
        {column.render ? (
          column.render()
        ) : (
          <span className="text-gray-600"> {item[column.key]}</span>
        )}
      </div>
    );
  }
);
