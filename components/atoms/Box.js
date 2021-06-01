import styled, { css } from 'styled-components';

const Box = styled.div`
  border-radius: 6px;
  border: 0;
  background-color: ${({ theme }) => theme.surface};

  ${({ outline }) =>
    outline &&
    css`
      border: 1px solid ${({ theme }) => theme.border};
  `}

  ${({ padding }) =>
    padding &&
    css`
      padding: 15px;
  `}

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      justify-content: center;
    `}

  ${({ spaceBetween }) =>
    spaceBetween &&
    css`
      justify-content: space-between;
    `}
  
  ${({ flexStart }) =>
    flexStart &&
    css`
      justify-content: flex-start;
    `}

  ${({ flexEnd }) =>
    flexEnd &&
    css`
      justify-content: flex-end;
    `}

	${({ alignCenter }) =>
    alignCenter &&
    css`
      align-items: center;
    `}

  ${({ column }) =>
    column &&
    css`
      flex-direction: column;
    `}
`;

export default Box;
 