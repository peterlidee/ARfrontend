import PropTypes from 'prop-types';
import Header from './Header';

function Page({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
Page.propTypes = {
  children: PropTypes.any,
};

export default Page;
