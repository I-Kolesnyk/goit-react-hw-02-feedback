import styled from '@emotion/styled';

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  width: 800px;
  height: 300px;
  background-color: ${({ theme }) => {
    return theme.colors.sectionBackgroundColor;
  }};
  border-radius: ${({ theme }) => {
    return theme.containerBorderRadius;
  }};
  box-shadow: ${({ theme }) => {
    return theme.boxShadow;
  }};
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 32px;
`;
