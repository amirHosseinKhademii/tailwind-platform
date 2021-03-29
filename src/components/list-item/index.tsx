import { FC, Fragment, memo } from "react";

export const ListItem: FC<IListItem> = memo(({ children, className }) => {
  return (
    <div
      className={`flex flex-row justify-between items-center rounded shadow  ${className}`}
    >
      {typeof children !== "object" ? (
        <div>{children}</div>
      ) : (
        children.length > 0 && (
          <Fragment>
            <div>
              {children.find((child) => child.props.slot === "content")}
            </div>
            <div>{children.find((child) => child.props.slot === "action")}</div>
          </Fragment>
        )
      )}
    </div>
  );
});
