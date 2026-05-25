import { useState, useContext } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import createUser from '../util/auth';
import AuthContext from '../store/auth-context';
import { Alert } from 'react-native';

function SignupScreen() {
  const [ isAuthenticating, setIsAuthenticating ] = useState(false);

  const authCtx = useContext(AuthContext);

  async function signupHandler({email, password}) {
    setIsAuthenticating(true);

    try{
      const token = await createUser(email, password);
      authCtx.authenticate();
    } catch (error) {
      Alert.alert(
        'Authentication failed',
        'Could not create user. Please check your credentials or try again later.'
      );

      setIsAuthenticating(false);
    }
  }

  if(isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
