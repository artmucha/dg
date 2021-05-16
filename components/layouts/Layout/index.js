import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import { useState, useEffect } from 'react';

import { Header, Menu, MenuOverlay, MenuHeader, MenuNavigation, MenuList, Footer, FooterCopyright } from './styles';
import Container from 'components/layouts/Container';

import MenuIcon from '../../../public/icons/menu-button.svg';

import menu from 'constans/menu';

const Layout = ({ children, title = 'dlagracza'}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
		Router.events.on("routeChangeStart", () => { 
			setOpen(false);
		});
    return () => {
      Router.events.off("routeChangeStart", () => {
				setOpen(false);
			});
    }
	}, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href='https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;400;700&display=swap' rel='stylesheet'/>
      </Head>
      <Header>
        <Container flex spaceBetween>
          <MenuIcon onClick={() => setOpen(!open)} />
          dlagracza
          <MenuOverlay open={open} onClick={() => setOpen(!open)} />
          <Menu open={open}>
            <MenuNavigation>
              <MenuHeader>dlagracza</MenuHeader>
              <MenuList>
              {menu.map(({ text, link }) => (
                <li key={text}>
                  {link ? (
                  <Link href={`/${link}`}>
                    <a>{text}</a>
                  </Link>
                  ) : null }
                </li>
              ))}
              </MenuList>
            </MenuNavigation>
          </Menu>
        </Container>
      </Header>

      { children }

      <Footer>
        <Container>
          <FooterCopyright>
            Copyright © {new Date().getFullYear()} <Link href="https://dlagracza.pl"><a>dlagracza</a></Link> - Wszystkie prawa zastrzeżone.
          </FooterCopyright>
        </Container>
      </Footer>
    </>
  )
};

export default Layout;