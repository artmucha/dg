import Layout from 'components/layouts/Layout';
import Container from 'components/layouts/Container';
import Box from 'components/atoms/Box';
import Avatar from 'components/atoms/Avatar';
import Typography from 'components/atoms/Typography';

import Gamepad from '../../public/icons/gamepad.svg';
import Heart from '../../public/icons/favorite.svg';
import Pencil from '../../public/icons/pencil.svg';

const Profile = () => (
  <Layout>
    <Container flex space>
      <Avatar src="/ArturMucha.jpg" />
    </Container>
    <Container flex space column alignCenter>
      <Typography as="h1" bold>Artur Mucha</Typography>
      <Typography as="h2" fontSize="s" color="textthirtary">@artmuc</Typography>
    </Container>
    <Container space>
      <Typography as="h3">GRY</Typography>
    </Container>
    <Container space flex spaceBetween>
      <Box padding>
        <Gamepad fill="#ffffff" />
        <Typography as="span" fontSize="xs" color="textsecondary">Mam</Typography>
      </Box>
      <Box padding>
        <Heart fill="#ffffff" />
        <Typography as="span" fontSize="xs" color="textsecondary">Chcę</Typography>
      </Box>
      <Box padding>
        <Pencil fill="#ffffff" />
        <Typography as="span" fontSize="xs" color="textsecondary">Oceniłem</Typography>
      </Box>
    </Container>
    <Container space>
      <Typography as="h3">AKTYWNOŚĆ</Typography>
    </Container>
    <Container space>
      <Typography as="h3">POZNAJ GRACZY</Typography>
    </Container>
  </Layout>
);

export default Profile;