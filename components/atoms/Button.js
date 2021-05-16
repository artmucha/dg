import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 10px 15px;
  outline: 0;
  transition: all 0.2s;
  cursor: pointer;
  text-align: center;
  font-family: 'Kumbh Sans', sans-serif;
  border-radius: 4px;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.primary};
  background-color: transparent;

  ${({ text }) =>
    text &&
    css`
      border: 0;
  `}

  &:hover {
    background-color: rgba(94,53,177, 0.3);
  }
`;

export default Button;
