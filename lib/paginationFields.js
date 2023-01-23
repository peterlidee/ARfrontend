import { PAGINATION_QUERY } from '../components/Pagination';

export default function PaginationFields() {
  return {
    // tells apollo we will take care of everything
    keyArgs: false,
    read(existing = [], { args, cache }) {
      const { skip, first } = args;
      // read the number of items on the page from the cache
      const data = cache.readQuery({ query: PAGINATION_QUERY });
      const count = data?._allProductsMeta?.count;
      const page = skip / first + 1;
      const pages = Math.ceil(count / first);

      // check if we have existing items
      const items = existing.slice(skip, skip + first).filter((x) => x);
      // if there are items and there aren't enough items to satisfy how many we requested and we are on the last page
      // then just send it
      if (items.length && items.length !== first && page === pages) {
        return items;
      }
      if (items.length !== first) {
        // we don't have any items, we must go to the network to fetch them
        return false;
      }
      // if there are items, just return them from the cache and we don't need to go to the network
      if (items.length) {
        return items;
      }

      // fallback to network, just in case
      return false;

      // first thing apollo does is ask for the read function
      // we can do 2 things
      // 1. return the items because they are already in the cache
      // 2. return false from here, (network request)
    },
    merge(existing, incoming, { args }) {
      const { skip, first } = args;
      // this runs when the apollo client comes back from the network with our products
      const merged = existing ? existing.slice(0) : [];
      for (let i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip];
      }
      // finally we return merged items from cache
      return merged;
    },
    // after running merge, apollo will run read function again
    // (read merge read)
  };
}
