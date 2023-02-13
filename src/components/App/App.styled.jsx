import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
  padding: 25px;
  background-color: ${({ theme }) => {
    return theme.colors.backgroundColor;
  }};
`;
