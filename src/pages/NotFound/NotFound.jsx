import { Container, Section, Title, Text, ToMainLink } from './NotFound.styled';

const NotFound = () => {
  return (
    <Section>
      <Container>
        <Title>404</Title>
        <Text>Page, not found</Text>
        <ToMainLink to="/" />
      </Container>
    </Section>
  );
};
export default NotFound;
