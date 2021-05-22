import Layout from 'components/layouts/Layout';
import Container from 'components/layouts/Container';
import Form from 'components/organisms/Form';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';

const Login = () => (
  <Layout>
    <Container flex alignCenter fill>
      <Form>
        <Input />
        <Input />
        <Input />
        <Button>Zapisz</Button>
      </Form>
    </Container>
  </Layout>
);

export default Login;