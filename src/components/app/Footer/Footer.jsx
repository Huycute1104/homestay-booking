export default function Footer() {
  const companyLinks = [
    { label: "About us", url: "/aboutus" },
    { label: "Trang chủ", url: "/" },
    { label: "Đặt phòng", url: "/booking" },
    { label: "Homestay", url: "/homestay" },
  ];

  const helpLinks = [
    { label: "Liên hệ", url: "/contact" },
    { label: "Điều khoản và điều kiện", url: "/terms" },
    { label: "FAQs", url: "/faqs" },
    { label: "Chính sách bảo mật", url: "/privacy-policy" },
  ];
  const paymentMethods = [
    "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2024-12-21/603cd0ca-fa00-4815-8fda-1f509054edba.png",
    "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2024-12-21/ab826d4b-ff1c-4e43-97b8-2bc270fa7dbd.png",
    "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2024-12-21/16bad889-0432-42db-9976-c22810bf3f25.png",
    "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2024-12-21/3365fb3e-1949-495e-9734-5378c90e7804.png",
    "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2024-12-21/509122b1-456c-41c2-b151-4342b151c7fd.png",
    "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2024-12-21/329ec593-f66e-457a-8462-9c259ce6cf05.png",
    "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2024-12-21/6cfb43d7-c6ce-4355-b17e-cacfa32ebd5b.png",
    "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2024-12-21/2368df4e-675d-4ad6-8c3c-32e78dfa8801.png",
    "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2024-12-21/5229250b-82ea-41e3-9384-f441e2b34a0b.png",
    "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2024-12-21/39b4cb24-02ff-4c2a-b27b-ab599f7bb799.png",
  ];

  return (
    <footer className="main-footer bg-[#d2f3ff] py-4 sm:py-6 lg:py-8">
      <div className="footer-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8">
        <div className="footer-section">
          <h3 className="text-base sm:text-sm lg:text-base font-semibold mb-2 sm:mb-3">
            Công Ty
          </h3>
          <ul className="text-xs sm:text-sm">
            {companyLinks.map((link, index) => (
              <li key={index} className="mb-1 sm:mb-2">
                <a
                  href={link.url}
                  className="text-gray-600 hover:text-[#02aab0]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="text-base sm:text-sm lg:text-base font-semibold mb-2 sm:mb-3">
            Help
          </h3>
          <ul className="text-xs sm:text-sm">
            {helpLinks.map((link, index) => (
              <li key={index} className="mb-1 sm:mb-2">
                <a
                  href={link.url}
                  className="text-gray-600 hover:text-[#02aab0]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="text-base sm:text-sm lg:text-base font-semibold mb-2 sm:mb-3">
            Phương thức thanh toán
          </h3>
          <div className="payment-methods flex flex-wrap gap-2 sm:gap-3">
            {paymentMethods.map((method, index) => (
              <img
                key={index}
                src={method}
                alt={`Payment method ${index + 1}`}
                className="payment-icon h-[20px] sm:h-[25px] lg:h-[30px] object-contain"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom text-center text-xs sm:text-sm text-gray-600 mt-4 sm:mt-6">
        <p>&copy; 2025 Hidden Oasis. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
