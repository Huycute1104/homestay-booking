import React, { useEffect, useState } from 'react';

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Giả lập fetch API
  useEffect(() => {
    setTimeout(() => {
      const mockData = [
        { id: 1, name: 'Sản phẩm A', price: 100000 },
        { id: 2, name: 'Sản phẩm B', price: 200000 },
        { id: 3, name: 'Sản phẩm C', price: 300000 },
      ];
      setProducts(mockData);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Danh sách sản phẩm</h1>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition duration-300"
            >
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600">{product.price.toLocaleString()} VNĐ</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductListPage;
