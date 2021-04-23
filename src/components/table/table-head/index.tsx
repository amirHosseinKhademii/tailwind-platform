import { FC, memo } from "react";

export const TableHead: FC<ITableHead> = memo(({ columns }) => (
  <div className="w-full border-b border-gray-400 flex items-center justify-start p-4 bg-cyan-600  rounded-t">
    {(columns || []).map((column, index) => (
      <div
        className={`flex items-center text-lg font-semibold ${column.width} ${
          index === columns.length - 1 ? " justify-end" : "justify-start"
        }`}
        key={index}
      >
        <span className="text-white">{column.head}</span>
      </div>
    ))}
  </div>
));
