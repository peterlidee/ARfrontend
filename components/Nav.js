import Link from 'next/link';
import NavStyles from './styles/NavStyles';

function Nav() {
  return (
    <NavStyles>
      <Link href="/products">
        <a>Products</a>
      </Link>
      <Link href="/sell">
        <a>Sell</a>
      </Link>
      <Link href="/orders">
        <a>Orders</a>
      </Link>
      <Link href="/account">
        <a>Account</a>
      </Link>
    </NavStyles>
  );
}

export default Nav;
