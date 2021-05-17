import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 2px;
  font-family: 'Kumbh Sans', sans-serif;
  outline: 0;
  color: ${({ theme }) => theme.textprimary};

  &::placeholder {
    color: ${({ theme }) => theme.border};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.textthirtary};
  }
`;

export default Input;
