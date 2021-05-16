import styled, { css } from 'styled-components';

export const Header = styled.header`
  background-color: ${({ theme }) => theme.surface};
  padding-top: 10px;
  padding-bottom: 10px;
  box-shadow: 0 11px 10px -10px rgba(0,0,0,.1);
`;

export const MenuOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 998;
  display: ${({ open }) => open ? 'block' : 'none'};
`;

export const Menu = styled.aside`
  display: flex;
  flex-direction: column;
  width: 260px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform .2s linear;
  z-index: 999;
  box-shadow: 0 8px 10px -5px rgb(0 0 0 / 20%), 0 16px 24px 2px rgb(0 0 0 / 14%), 0 6px 30px 5px rgb(0 0 0 / 12%);
  background-color: ${({ theme }) => theme.surface};
`;

export const MenuNavigation = styled.nav`
  width: 100%;
`;

export const MenuHeader = styled.div`
  width: 100%;
  padding: 18px 20px;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.bold};
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;

  a {
    display: block;
    padding: 10px;
    border-radius: 2px;
    font-weight: ${({ theme }) => theme.bold};
    color: ${({ theme }) => theme.textprimary};

    &:hover {
      background-color: ${({ theme }) => theme.action};
    }
  }
`;

export const Footer = styled.footer`
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 20px;
  line-height: 1.7;
  text-align: center;
  font-weight: ${({ theme }) => theme.regular};
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: ${({ theme }) => theme.surface};

  @media(min-width: 768px) {
    margin-top: 40px;
    text-align: left;
  }
`;

export const FooterCopyright = styled.p`
  padding-top: 20px;
  text-align: center;

  a {
    color: inherit;
  }
`;