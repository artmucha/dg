import styled from 'styled-components';

const IconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 42px;
  width: 42px;
  height: 42px;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  outline: 0;
  transition: all 0.2s;
  background-color: transparent;

  svg {
    fill: ${({ fill }) => fill};
  }

  &:hover {
    background-color: ${({ theme }) => theme.action};
  }
`;

export default IconButton;