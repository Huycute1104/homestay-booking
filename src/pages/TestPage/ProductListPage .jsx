import React, { useEffect, useState } from "react";
import { FiHeart, FiShoppingCart, FiStar } from "react-icons/fi";

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const mockData = [
        {
          id: 1,
          name: "Luxury Villa Suite",
          price: 2500000,
          image:
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3",
          rating: 4.8,
          reviews: 128,
          location: "Đà Nẵng",
          description: "Biệt thự sang trọng với view biển tuyệt đẹp",
        },
        {
          id: 2,
          name: "Mountain Retreat",
          price: 1800000,
          image:
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3",
          rating: 4.6,
          reviews: 95,
          location: "Đà Lạt",
          description: "Căn hộ yên tĩnh giữa thiên nhiên trong lành",
        },
        {
          id: 3,
          name: "Beach Apartment",
          price: 1200000,
          image:
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3",
          rating: 4.5,
          reviews: 76,
          location: "Hồ Chí Minh",
          description: "Căn hộ hiện đại tại trung tâm thành phố",
        },
        {
          id: 4,
          name: "Hidden Osias",
          price: 1400000,
          image:
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3",
          rating: 4.5,
          reviews: 76,
          location: "Đà Nẵng",
          description: "Căn hộ yên bình mát mẻ",
        },
        {
          id: 5,
          name: "Luxury Villa Suite",
          price: 2500000,
          image:
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3",
          rating: 4.8,
          reviews: 128,
          location: "Đà Nẵng",
          description: "Biệt thự sang trọng với view biển tuyệt đẹp",
        },
        {
          id: 6,
          name: "Mountain Retreat",
          price: 1800000,
          image:
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3",
          rating: 4.6,
          reviews: 95,
          location: "Đà Lạt",
          description: "Căn hộ yên tĩnh giữa thiên nhiên trong lành",
        },
      ];
      setProducts(mockData);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Khám Phá Homestay
          </h1>
          <p className="text-xl text-gray-600">
            Tìm kiếm không gian lưu trú hoàn hảo cho chuyến đi của bạn
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors duration-200">
                    <FiHeart className="w-6 h-6 text-red-500" />
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {product.name}
                      </h2>
                      <p className="text-gray-600 flex items-center gap-1">
                        <FiStar className="w-5 h-5 text-yellow-400 inline" />
                        <span>{product.rating}</span>
                        <span className="text-gray-400">
                          ({product.reviews} đánh giá)
                        </span>
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-blue-600">
                        {product.price.toLocaleString()} đ
                      </p>
                      <p className="text-gray-500 text-sm">mỗi đêm</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-gray-500">
                      <span className="font-semibold">Địa điểm:</span>{" "}
                      {product.location}
                    </p>
                    <p className="text-gray-600 mt-2">{product.description}</p>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors duration-200">
                    <FiShoppingCart className="w-5 h-5" />
                    Đặt ngay
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListPage;
