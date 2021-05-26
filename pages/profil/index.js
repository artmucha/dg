import Layout from 'components/layouts/Layout';
import Container from 'components/layouts/Container';
import Box from 'components/atoms/Box';
import Avatar from 'components/atoms/Avatar';

const Profile = () => (
  <Layout>
    <Container flex space>
      <Avatar src="/ArturMucha.jpg" />
    </Container>
    <Container flex space column alignCenter>
      <h1>Artur Mucha</h1>
      <h2>@artmuc</h2>
    </Container>
    <Container space>
      <h3>GRY</h3>
    </Container>
    <Container space flex spaceBetween>
      <Box padding>MAM</Box>
      <Box padding>CHCĘ</Box>
      <Box padding>OCENIŁEM</Box>
    </Container>
    <Container space>
      <h3>AKTYWNOŚĆ</h3>
    </Container>
    <Container space>
      <h3>POZNAJ GRACZY</h3>
    </Container>
  </Layout>
);

export default Profile;