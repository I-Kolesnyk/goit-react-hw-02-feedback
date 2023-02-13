import styled from '@emotion/styled';

export const ButtonStyles = styled.button`
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
  &:focus-visible {
    transform: scale(1.1);
  }

  &#good:hover,
  &#good:focus-visible {
    background-color: ${({ theme }) => {
      return theme.colors.goodButtonHoverColor;
    }};
    border-color: ${({ theme }) => {
      return theme.colors.goodButtonHoverColor;
    }};
  }

  &#neutral:hover,
  &#neutral:focus-visible {
    background-color: ${({ theme }) => {
      return theme.colors.neutralButtonHoverColor;
    }};
    border-color: ${({ theme }) => {
      return theme.colors.neutralButtonHoverColor;
    }};
  }

  &#bad:hover,
  &#bad:focus-visible {
    background-color: ${({ theme }) => {
      return theme.colors.badButtonHoverColor;
    }};
    border-color: ${({ theme }) => {
      return theme.colors.badButtonHoverColor;
    }};
  }
`;
