import React, { useEffect } from "react";
import ListItem from "../../molecules/ListItem";
import { ListStyleWrapper } from "./index.styles";

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
    <ListStyleWrapper>
      {items
        .sort((item1, item2) => {
          return new Date(item1.updated_at) > new Date(item2.updated_at)
            ? -1
            : 1;
        })
        .map((item, index) => {
          if (item.name.toLowerCase().includes(itemFilter.toLowerCase())) {
            count += 1;
            const {
              name,
              owner: { avatar_url },
              created_at,
              updated_at,
            } = item;
            return (
              <ListItem
                key={index}
                name={name}
                avatar_url={avatar_url}
                created_at={created_at}
                updated_at={updated_at}
              />
            );
          }
          return null;
        })}
    </ListStyleWrapper>
  );
};

List.defaultProps = {
  text: "",
  resultCount: () => {},
};

export default List;
