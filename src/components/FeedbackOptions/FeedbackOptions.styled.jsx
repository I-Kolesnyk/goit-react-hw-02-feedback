import styled from '@emotion/styled';

export const ButtonContainer = styled.div`
  display: flex;
  gap: 25px;
`;

export const Button = styled.button`
  width: 150px;
  height: 50px;
  transform: scale(1);
  background-color: ${({ theme }) => {
    return theme.colors.buttonBackgroundColor;
  }};
  border-radius: ${({ theme }) => {
    return theme.buttonBorderRadius;
  }};
  border: ${({ theme }) => {
    return theme.buttonBorder;
  }};
  text-transform: capitalize;
  font-size: 20px;

  transition: transform 250ms ease-out, background-color 250ms ease-out;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }

  &#good:hover,
  &#good:focus {
    background-color: ${({ theme }) => {
      return theme.colors.goodButtonHoverColor;
    }};
    border-color: ${({ theme }) => {
      return theme.colors.goodButtonHoverColor;
    }};
  }

  &#neutral:hover,
  &#neutral:focus {
    background-color: ${({ theme }) => {
      return theme.colors.neutralButtonHoverColor;
    }};
    border-color: ${({ theme }) => {
      return theme.colors.neutralButtonHoverColor;
    }};
  }

  &#bad:hover,
  &#bad:focus {
    background-color: ${({ theme }) => {
      return theme.colors.badButtonHoverColor;
    }};
    border-color: ${({ theme }) => {
      return theme.colors.badButtonHoverColor;
    }};
  }
`;
