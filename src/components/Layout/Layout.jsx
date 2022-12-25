// import { Navigation } from 'components/Navigation/Navigation';
import { Outlet, Link, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader.jsx';

// import {
//   Header,
//   Container,
//   LogoLink,
//   // Logo,
//   SiteName,
//   NavList,
//   StyledLink,
// } from './Layout.styled.jsx';

const Layout = () => {
  return (
    <>
      <header>
        <div>
          <Link to="/">
            <p>Movies</p>
          </Link>
          <nav>
            <ul>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/movies">Movies</NavLink>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <footer>
        <p>Made by GOit student Maria Fandeeva 2022</p>
      </footer>
    </>
  );
};
export default Layout;
