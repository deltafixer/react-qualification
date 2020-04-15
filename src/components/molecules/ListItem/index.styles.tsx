import styled from "styled-components";

export const StyledListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;

  margin-bottom: 3px;

  > *:not(:last-child) {
    margin-right: 6px;
  }

  > img {
    width: 24px;
  }

  .dates {
    display: flex;
    flex-direction: column;
    font-size: 12px;
    margin: 0 0 0 auto;
    align-items: flex-end;
  }
`;
