import styled from '@emotion/styled';

export const StatisticsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 15px;
  row-gap: 50px;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const StatisticsItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 20px;
  width: 220px;
  height: 50px;
  border-radius: ${({ theme }) => {
    return theme.buttonBorderRadius;
  }};

  &#good {
    background-color: ${({ theme }) => {
      return theme.colors.goodButtonHoverColor;
    }};
  }

  &#neutral {
    background-color: ${({ theme }) => {
      return theme.colors.neutralButtonHoverColor;
    }};
  }

  &#bad {
    background-color: ${({ theme }) => {
      return theme.colors.badButtonHoverColor;
    }};
  }

  &#total {
    background-color: ${({ theme }) => {
      return theme.colors.buttonBackgroundColor;
    }};
  }

  &#positive {
    background-color: ${({ theme }) => {
      return theme.colors.buttonBackgroundColor;
    }};
  }
`;
