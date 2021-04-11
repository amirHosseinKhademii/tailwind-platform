import { FC, memo, useCallback, useState } from "react";
import { Check } from "components/check";

export const TableCell: FC<ITableCell> = memo(
  ({ column, index, item, columns }) => {
    const [checkList, setCheckList] = useState([]);

    const handleCheck = useCallback(
      (id) => (e) => {
        e.stopPropagation();
        const exist = id && checkList.find((item) => item == id);
        if (exist) setCheckList((prev) => prev.filter((item) => item != id));
        else setCheckList((prev) => [...prev, id]);
      },
      [checkList]
    );

    return (
      <div
        className={`flex items-center ${column.width} ${
          index === columns.length - 1 ? " justify-end" : "justify-start"
        }`}
      >
        {column.checkable && (
          <Check
            checked={checkList.find((it) => it == item.id) ? true : false}
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
