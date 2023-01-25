import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';

const REMOVE_FROM_CART_MUTATTION = gql`
  mutation REMOVE_FROM_CART_MUTATTION($id: ID!) {
    deleteCartItem(id: $id) {
      id
    }
  }
`;

const BigButton = styled.button`
  font-size: 3rem;
  background: none;
  border: 0;
  &:hover {
    color: var(--red);
    cursor: pointer;
  }
`;

function update(cache, payload) {
  cache.evict(cache.identify(payload.data.deleteCartItem));
}

function RemoveFromCart({ id }) {
  const [deleteCartItem, { loading }] = useMutation(
    REMOVE_FROM_CART_MUTATTION,
    {
      variables: { id },
      update,
      // optimisticResponse: {
      //   deleteCartItem: {
      //     __typename: 'CartItem',
      //     id,
      //   },
      // },
    }
  );
  return (
    <BigButton
      onClick={deleteCartItem}
      disabled={loading}
      type="button"
      title="Remove this item from Cart"
    >
      &times;
    </BigButton>
  );
}

export default RemoveFromCart;
