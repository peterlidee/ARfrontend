import styled from 'styled-components';
import RequestReset from '../components/RequestReset';
import Signin from '../components/Signin';
import Signup from '../components/Signup';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
`;

function SigninPage() {
  return (
    <Grid>
      <Signin />
      <Signup />
      <RequestReset />
    </Grid>
  );
}

export default SigninPage;
