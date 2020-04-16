import styled from "styled-components";

export const ListStyleWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;

  li {
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;
