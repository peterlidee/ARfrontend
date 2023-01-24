import Link from 'next/link';
import { useCart } from '../lib/cartState';
import CartCount from './CartCount';
import Signout from './Signout';
import NavStyles from './styles/NavStyles';
import { useUser } from './User';

function Nav() {
  const user = useUser();
  const { openCart } = useCart();
  return (
    <NavStyles>
      <Link href="/products">
        <a>Products</a>
      </Link>
      {user && (
        <>
          <Link href="/sell">Sell</Link>
          <Link href="/orders">Orders</Link>
          <Link href="/account">Account</Link>
          <Signout />
          <button type="button" onClick={openCart}>
            my cart
            <CartCount
              count={user.cart.reduce(
                (tally, cartItem) => tally + cartItem.quantity,
                0
              )}
            />
          </button>
        </>
      )}
      {!user && (
        <>
          <Link href="/signin">sign in</Link>
        </>
      )}
    </NavStyles>
  );
}

export default Nav;
