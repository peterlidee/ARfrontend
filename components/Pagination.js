import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import Link from 'next/link';
import PaginationStyles from './styles/PaginationStyles';
import DisplayError from './ErrorMessage';
import { perPage } from '../config';

const PAGINATION_QUERY = gql`
  query {
    _allProductsMeta {
      count
    }
  }
`;

function Pagination({ page }) {
  const { loading, error, data } = useQuery(PAGINATION_QUERY);
  if (loading) return 'Loading';
  if (error) return <DisplayError error={error} />;
  const { count } = data._allProductsMeta;
  const pageCount = Math.ceil(count / perPage);
  return (
    <PaginationStyles>
      <Head>Sick Fits - Page {page} of ____</Head>
      <Link href={`/products/${page - 1}`}>
        <a aria-disabled={page <= 1}>prev</a>
      </Link>
      <p>Page _ of {pageCount}</p>
      <p>{count} items total</p>
      <Link href={`/products/${page + 1}`}>
        <a aria-disabled={page >= pageCount}>prev</a>
      </Link>
    </PaginationStyles>
  );
}

export default Pagination;