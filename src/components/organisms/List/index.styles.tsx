import styled from "styled-components";

export const ListStyleWrapper = styled.div`
  display: flex;
  flex-direction: column;

  div {
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;
