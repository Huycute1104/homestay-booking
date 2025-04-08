// src/components/app/FAQ.jsx

const FAQ = () => (
  <section className="py-8 bg-gray-50">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-semibold mb-4">Câu Hỏi Thường Gặp</h2>
      <div className="space-y-4">
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold mb-2">
            Homestay của bạn có những tiện nghi gì?
          </h3>
          <p className="text-gray-600">
            Chúng tôi cung cấp đầy đủ các tiện nghi như wifi miễn phí, phòng
            gym, dịch vụ đưa đón, và bữa sáng.
          </p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold mb-2">
            Có thể hủy phòng không?
          </h3>
          <p className="text-gray-600">
            Chúng tôi cho phép hủy phòng miễn phí trước 24 giờ trước ngày nhận
            phòng. Sau thời gian này, phí hủy sẽ áp dụng.
          </p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold mb-2">
            Homestay có cho phép thú cưng không?
          </h3>
          <p className="text-gray-600">
            Chúng tôi rất vui khi được đón tiếp thú cưng của bạn, nhưng vui lòng
            thông báo trước khi đặt phòng.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default FAQ;
