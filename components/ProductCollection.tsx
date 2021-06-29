import { useLatestCartsQuery } from '../generated/graphql';
import Image from 'next/image'

function Products() {
  const { loading, error, data } = useLatestCartsQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  if (data) {
    const latestCarts = data.checkouts?.edges || [];

    return (
      <ul role="list" className="grid grid-cols-1 gap-4">
        {latestCarts?.length > 0 &&
          latestCarts.map(
            ({ node: { id, lines, totalPrice, user } }) => (
              <li key={id} className="relative bg-white divide-y divide-gray-200 overflow-hidden shadow hover:shadow-lg">
                <div className="p-2 ">
                  <p className="block text-base font-bold text-gray-500">Name: {user?.firstName}</p>
                </div>
                <div className="p-2 grid grid-cols-8 gap-2">
                  {lines && lines.map((line, idx) =>
                    <div className="border" key={idx}>
                      <Image alt="Product" src={line?.variant.product.thumbnail?.url!} width="140" height="140" />
                    </div>
                  )}
                </div>
                <div className="p-2">
                  <p className="block text-sm text-gray-600 truncate">{id}</p>
                </div>
              </li>
            ),
          )}
      </ul>
    );
  }

  return null;
}

export default Products;
