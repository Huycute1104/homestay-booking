import FeatureItem from "./FeatureItem";

const features = [
  {
    icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2024-12-20/a7dd7c8e-2b13-4b02-9bde-c0217a931726.png",
    title: "Quyền lợi khi làm thành viên",
    description: "Đăng kí thành viên được nhiều ưu đãi hấp dẫn",
  },
  {
    icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2024-12-20/ca7c7443-4fbf-4dee-a4a2-edd976e77f5e.png",
    title: "Thanh toán đơn giản",
    description:
      "Phương thức thanh toán tiện lợi, an toàn. Tích hợp chức năng lưu thẻ để đặt phòng lần sau.",
  },
  {
    icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2024-12-20/5c44a1c4-74d5-4b62-99d7-1f01bf5197fc.png",
    title: "Ưu đãi mỗi ngày",
    description:
      "Nhận thông báo khi có giảm giá hay voucher khi làm thành viên chính thức",
  },
  {
    icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2024-12-20/586379be-9499-43cd-893a-355b5f92be02.png",
    title: "Tiện ích thông minh",
    description:
      "Check-in và kiểm tra hóa đơn thanh toán kể cả khi không có kết nối mạng. Hoàn tiền nhanh gọn. Đổi lịch dễ dàng.",
  },
];

export default function FeatureSection() {
  return (
    <section className="feature-section grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
      {features.map((feature, index) => (
        <FeatureItem key={index} {...feature} />
      ))}
    </section>
  );
}
