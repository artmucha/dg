import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: block;
  width: 100%;
  max-width: 400px;
  padding: 15px;
  background-color: ${({ theme }) => theme.surface};

  * {
    margin-bottom: 15px;
  }
`;