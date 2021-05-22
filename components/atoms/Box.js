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
`;

export default Box;
 