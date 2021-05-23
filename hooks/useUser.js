import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import firebase from 'firebase/app';
import 'firebase/auth';
import { initFirebase } from 'libs/firebase';
import {
  removeUserCookie,
  setUserCookie,
  getUserFromCookie,
} from 'libs/cookies';
import { mapUserData } from 'utils/helpers';

initFirebase();

const useUser = () => {
  const [user, setUser] = useState();
  const router = useRouter();

  const logout = async () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        router.push('/login')
      })
      .catch((e) => {
        console.error(e);
      });
  };

  useEffect(() => {
    const cancelAuthListener = firebase
      .auth()
      .onIdTokenChanged(async (user) => {
        if (user) {
          const userData = await mapUserData(user);
          setUserCookie(userData);
          setUser(userData);
        } else {
          removeUserCookie();
          setUser();
        }
      })

    const userFromCookie = getUserFromCookie();
    setUser(userFromCookie);

    return () => {
      cancelAuthListener();
    }
  }, []);

  return { user, logout };
};

export { useUser };