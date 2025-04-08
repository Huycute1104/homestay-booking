// src/components/app/FeaturedServices.jsx

const FeaturedServices = () => (
  <section className="py-8 bg-gray-50">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-semibold mb-4">Dịch Vụ Nổi Bật</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Wifi miễn phí</h3>
          <p className="text-gray-600">
            Chúng tôi cung cấp wifi tốc độ cao miễn phí cho mọi phòng.
          </p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Dịch vụ đưa đón</h3>
          <p className="text-gray-600">
            Dịch vụ xe đưa đón tận nơi giúp bạn di chuyển dễ dàng.
          </p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Phòng tập gym</h3>
          <p className="text-gray-600">
            Phòng gym hiện đại phục vụ nhu cầu tập luyện của bạn.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturedServices;
