import { useState } from 'react';

import Layout from 'components/layouts/Layout';
import Container from 'components/layouts/Container';
import Box from 'components/atoms/Box';
import Tabs from 'components/organisms/Tabs';
import Form from 'components/organisms/Form';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';

const tabs = [
  {
    label: 'login',
    text: 'Zaloguj się',
  },
  {
    label: 'register',
    text: 'Zarejestruj się'
  },
];

const Login = () => {
  const [selected, setSelected] = useState('login');

  return (   
    <Layout>
      <Container flex column alignCenter flexStart space fill>
        <Box>
          <Tabs tabs={tabs} selected={selected} setSelected={setSelected}>

            { selected === 'login' ? (
              <Form>
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Hasło" />
                <Button>Zaloguj</Button>
              </Form>
            ) : (
              <Form>
                <Input type="text" placeholder="Login" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Hasło" />
                <Button>Zarejestruj</Button>
              </Form>
            )}

          </Tabs>
        </Box>
      </Container>
  </Layout>
);

};

export default Login;