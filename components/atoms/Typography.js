import styled, { css } from 'styled-components';

const Typography = styled.div`
  display: block;
  line-height: 1.5;
  font-weight: ${({ theme }) => theme.regular};
  color: ${({ theme, color }) => (color ? theme[color] : theme.textprimary)};
  font-size: ${({ theme, fontSize }) => (fontSize ? theme.fontSize[fontSize] : '16px')};

  ${({ uppercase }) =>
    uppercase &&
    css`
      text-transform: uppercase;
  `}

  ${({ bold }) =>
    bold &&
    css`
      font-weight: ${({ theme }) => theme.bold};
  `}

  ${({ space }) => 
    space &&
    css`
      margin: 20px 0;
    `}

`;

export default Typography;
