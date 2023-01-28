import SignIn from './Signin';
import { useUser } from './User';

function PleaseSignIn({ children }) {
  const me = useUser();
  if (!me) return <SignIn />;
  return children;
}

export default PleaseSignIn;
