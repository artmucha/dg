import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: disc;
`;

export const ListItem = styled.li`
  margin-top: 50px;
  color: ${({ theme }) => theme.textprimary};
  font-size: ${({ theme }) => theme.fontSize.xs};

  a {
    color: ${({ theme }) => theme.brand};
  }
`;