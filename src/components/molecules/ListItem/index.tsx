import React from "react";
import { StyledListItem } from "./index.styles";

export type ListItemProps = {
  name: string;
  avatar_url: string;
  created_at: string;
  updated_at: string;
};

const ListItem = ({
  name,
  avatar_url,
  created_at,
  updated_at,
}: ListItemProps): JSX.Element => {
  return (
    <StyledListItem>
      <img src={avatar_url} alt="" />
      <span>{name}</span>
      <div className="dates">
        <span>Created at: {new Date(created_at).toLocaleString()}</span>
        <span>Updated at: {new Date(updated_at).toLocaleString()}</span>
      </div>
    </StyledListItem>
  );
};

export default ListItem;
