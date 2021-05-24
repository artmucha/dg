import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import { useState, useEffect } from 'react';

import { useUser } from 'hooks/useUser';
import { Header, Menu, MenuOverlay, MenuHeader, MenuNavigation, MenuList, Footer, FooterCopyright, Buttons } from './styles';
import Container from 'components/layouts/Container';
import Button from 'components/atoms/Button';
import IconButton from 'components/atoms/IconButton';
import Input from 'components/atoms/Input';

import MenuIcon from '../../../public/icons/menu-button.svg';
import UserIcon from '../../../public/icons/user.svg'

import menu from 'constans/menu';

const Layout = ({ children, title = 'dlagracza'}) => {
  const [open, setOpen] = useState(false);
  const { user } = useUser();

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
        <Container fluid flex spaceBetween alignCenter>
          <IconButton fill="#ffffff" onClick={() => setOpen(!open)}>
            <MenuIcon />
          </IconButton>
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
          <Container flex flexEnd fluid>
            <Input type="search" placeholder="Szukaj gier..." />
            <Buttons>

            {!user ? (
              <Link href='/login'><a><Button>Zaloguj</Button></a></Link>
            ) : (
              <Link href='/profil'>
                <a><IconButton><UserIcon fill="#ffffff" /></IconButton></a>
              </Link>
            )}

            </Buttons>
          </Container>
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