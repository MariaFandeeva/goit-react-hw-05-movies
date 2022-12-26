import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader.jsx';
import { FcFilmReel } from 'react-icons/fc';
import { IconContext } from 'react-icons';

import {
  Header,
  Container,
  LogoLink,
  SiteName,
  Footer,
  FooterText,
  MyLink,
  Logo,
} from './Layout.styled.jsx';

const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <LogoLink to="/">
            <Logo>
              <IconContext.Provider value={{ size: 40, color: '#fff' }}>
                <FcFilmReel />
              </IconContext.Provider>
            </Logo>
            <SiteName>Movies</SiteName>
          </LogoLink>
        </Container>
        <Navigation />
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer>
        <FooterText>
          Made by GOit student
          <MyLink href="https://www.linkedin.com/in/maria-fandeeva-47530a25a/">
            Maria Fandeeva
          </MyLink>
          2022
        </FooterText>
      </Footer>
    </>
  );
};
export default Layout;
