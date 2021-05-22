import styled from 'styled-components';

const Box = styled.div`
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.surface};
`;

export default Box;
 