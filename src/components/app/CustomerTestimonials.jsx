// src/components/app/CustomerTestimonials.jsx

const CustomerTestimonials = () => (
  <section className="py-8">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-semibold mb-4">Khách Hàng Nói Gì?</h2>
      <div className="flex justify-center space-x-6">
        <div className="bg-white p-6 shadow-lg rounded-lg max-w-sm">
          <p className="text-lg text-gray-600 mb-4">
            "Một trải nghiệm tuyệt vời! Phòng ở rất sạch sẽ và nhân viên vô cùng
            thân thiện."
          </p>
          <span className="font-semibold text-gray-700">Nguyễn Văn A</span>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg max-w-sm">
          <p className="text-lg text-gray-600 mb-4">
            "Dịch vụ tuyệt vời, mình sẽ quay lại đây mỗi khi có dịp."
          </p>
          <span className="font-semibold text-gray-700">Trần Thị B</span>
        </div>
      </div>
    </div>
  </section>
);

export default CustomerTestimonials;
