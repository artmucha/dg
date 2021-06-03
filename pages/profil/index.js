import Layout from 'components/layouts/Layout';
import Container from 'components/layouts/Container';
import Grid from 'components/layouts/Grid';
import Box from 'components/atoms/Box';
import Avatar from 'components/atoms/Avatar';
import Typography from 'components/atoms/Typography';
import IconButton from 'components/atoms/IconButton';
import { List, ListItem } from 'components/atoms/List';

import Gamepad from '../../public/icons/gamepad.svg';
import Heart from '../../public/icons/favorite.svg';
import Pencil from '../../public/icons/pencil.svg';
import FollowIcon from '../../public/icons/follow.svg';

const Profile = () => (
  <Layout>
    <Container flex space>
      <Avatar src="/ArturMucha.jpg" />
    </Container>
    <Container flex space column alignCenter small>
      <Typography as="h1" bold>Artur Mucha</Typography>
      <Typography as="h2" fontSize="s" color="textthirtary">@artmuc</Typography>
    </Container>
    <Container flex spaceBetween alignCenter small>
      <Typography as="h4" fontSize="xs" color="textsecondary">87 Obserwujących</Typography>
      <Typography as="h4" fontSize="xs" color="textsecondary">6 Obserwowanych</Typography>
      <IconButton fill="#ffffff" title="Obserwuj">
        <FollowIcon />
      </IconButton>
    </Container>
    <Container space small>
      <Grid s="3" m="3" l="3">
        <Box padding flex column alignCenter>
          <Box flex>
            <Gamepad fill="#ffffff" />
            <Typography as="span" fontSize="l" ml="10px">8</Typography>
          </Box>
          <Typography as="span" fontSize="xs" color="textsecondary">Mam</Typography>
        </Box>
        <Box padding flex column alignCenter>
          <Box flex>
            <Heart fill="#ffffff" />
            <Typography as="span" fontSize="l" ml="10px">14</Typography>
          </Box>
          <Typography as="span" fontSize="xs" color="textsecondary">Chcę</Typography>
        </Box>
        <Box padding flex column alignCenter>
          <Box flex>
            <Pencil fill="#ffffff" />
            <Typography as="span" fontSize="l" ml="10px">56</Typography>
          </Box>
          <Typography as="span" fontSize="xs" color="textsecondary">Oceniłem</Typography>
        </Box>
      </Grid>
    </Container>
    <Container space small>
      <Typography as="h3">AKTYWNOŚĆ</Typography>
      <List>
        <ListItem>Dodał recenzję do gry <a>Tomb Raider</a></ListItem>
        <ListItem>Dodał ocenę do gry <a>Tomb Raider</a></ListItem>
        <ListItem>Dodał <a>Tomb Raider</a> do listy Skończyłem</ListItem>
        <ListItem>Dodał <a>Tomb Raider</a> do listy Mam</ListItem>
        <ListItem>Dodał <a>Tomb Raider</a> do listy Chcę</ListItem>
      </List>
    </Container>
  </Layout>
);

export default Profile;