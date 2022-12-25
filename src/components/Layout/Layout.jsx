import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader.jsx';

import {
  Header,
  Container,
  LogoLink,
  SiteName,
  Footer,
  FooterText,
  MyLink,
} from './Layout.styled.jsx';

const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <LogoLink to="/">
            <SiteName>Movies</SiteName>
          </LogoLink>
          {/* <nav>
            <ul>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/movies">Movies</NavLink>
            </ul>
          </nav>
        // </div> */}
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
          <MyLink to="https://www.linkedin.com/in/maria-fandeeva-47530a25a/">
            Maria Fandeeva
          </MyLink>
          2022
        </FooterText>
      </Footer>
    </>
  );
};
export default Layout;
