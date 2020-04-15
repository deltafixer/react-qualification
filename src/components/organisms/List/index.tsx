import React, { useEffect } from "react";

type ListProps = {
  items: any[];
  itemFilter: string;
  resultCount: Function;
};

const List = ({ items, itemFilter, resultCount }: ListProps): JSX.Element => {
  let count = 0;

  useEffect(() => {
    resultCount(count);
  }, [count, itemFilter, resultCount]);

  return (
    <div className="items-container">
      {items.map((item, index) => {
        if (item.name.toLowerCase().includes(itemFilter.toLowerCase())) {
          count += 1;
          return <div key={index}>{item.name}</div>;
        }
        return null;
      })}
    </div>
  );
};

List.defaultProps = {
  text: "",
  resultCount: () => {},
};

export default List;
