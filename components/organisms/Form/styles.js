import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 400px;
  padding: 15px;
  background-color: ${({ theme }) => theme.surface};

  * {
    margin-bottom: 15px;
  }
`;