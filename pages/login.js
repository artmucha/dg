import { useState } from 'react';
import { useRouter } from 'next/router';
import firebase from 'firebase/app';
import 'firebase/auth';

import { initFirebase } from 'libs/firebase';
import { setUserCookie } from 'libs/cookies';
import { mapUserData } from 'utils/helpers';

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

initFirebase();

const Login = () => {
  const router = useRouter();
  const [selected, setSelected] = useState('login');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState([]);
  const [data, setData] = useState({
    login:'',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleLogin = async(event) => {
    event.preventDefault();
    setSubmitting(true);
    try {
      const { user } = await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
      const userData = await mapUserData(user);
      setUserCookie(userData);
      setSuccess(true);
      router.push('/');
    } catch(error) {
      let message = '';
      if(error.code == 'auth/user-not-found') {
        message = 'Konto o podanym adresie email nie istnieje';
      } else {
        message = 'Hasło nieprawidłowe'
      }
      
      setErrors([message]);
    };
    setSubmitting(false);
  };

  const handleSignup = async(event) => {
    event.preventDefault();
    setSubmitting(true);
    try {
      const { user } = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password);
      console.log(user)
      const userData = await mapUserData(user);
      setUserCookie(userData);
      setSuccess(true);
      router.push('/profil');
        
    } catch(error) {
        let message = 'Istnieje już konto powiązane z tym adresem email.'
        setErrors([message]);
    };
    setSubmitting(false);
  };

  return (   
    <Layout>
      <Container flex column alignCenter flexStart space fill="true">
        <Box>
          <Tabs tabs={tabs} selected={selected} setSelected={setSelected}>

            { selected === 'login' ? (
              <Form id="login" method="POST" name="login">
                <Input type="email" name="email" value={data.email} placeholder="Email" onChange={handleChange} required />
                <Input type="password" name="password" value={data.password} placeholder="Hasło" onChange={handleChange} required />
                <Button type="submit" onClick={(e) => handleLogin(e)}>Zaloguj</Button>
              </Form>
            ) : (
              <Form id="register" method="POST" name="register">
                <Input type="text" name="login" value={data.login} placeholder="Login" onChange={handleChange} required />
                <Input type="email" name="email" value={data.email} placeholder="Email" onChange={handleChange} required />
                <Input type="password" name="password" value={data.password} placeholder="Hasło" onChange={handleChange} required />
                <Button type="submit" onClick={(e) => handleSignup(e)}>Zarejestruj</Button>
              </Form>
            )}

          </Tabs>
        </Box>
      </Container>
    </Layout>
  );

};

export default Login;