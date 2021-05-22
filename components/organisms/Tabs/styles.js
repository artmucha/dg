import styled, { css } from 'styled-components';

export const TabButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TabButton = styled.button`
  cursor: pointer;
  border: 0;
  outline: 0;
  flex: 0 0 1;
  padding: 15px;
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.textthirtary};
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: ${({ theme }) => theme.background};

  ${({ selected }) =>
    selected &&
    css`
      background-color: transparent;
      color: ${({ theme }) => theme.textprimary};
    `}
`;