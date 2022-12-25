import { NavList, StyledLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavList>
      <StyledLink to="/">Home</StyledLink>

      <StyledLink to="/movies">Movies</StyledLink>
    </NavList>
  );
};
