import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';


function LoginButton() {
  const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();

  return !isAuthenticated && (
    <Button style={{background: "linear-gradient(50deg, var(--accent-color-blue), var(--accent-color-cyan))"}}onClick={loginWithRedirect}>Sign in</Button>
  );
}

export default LoginButton;