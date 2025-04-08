import { Card, CardContent } from "../../../components/ui/card";
import { motion } from "framer-motion";
import { Banknote, Home, MapPin, Phone } from "lucide-react";

const AboutUsPage = () => {
  const features = [
    {
      icon: Home,
      title: "Không gian ấm cúng",
      description:
        "Các phòng nghỉ được thiết kế tỉ mỉ, mang lại cảm giác gần gũi và thoải mái. Bạn sẽ tìm thấy sự bình yên và thư giãn trong từng góc nhỏ của homestay.",
    },
    {
      icon: Phone,
      title: "Dịch vụ chuyên nghiệp",
      description:
        "Chúng tôi cung cấp dịch vụ chăm sóc khách hàng tận tình, giúp bạn có một kỳ nghỉ không lo âu. Đội ngũ nhân viên luôn sẵn sàng hỗ trợ bạn 24/7.",
    },
    {
      icon: MapPin,
      title: "Vị trí thuận lợi",
      description:
        "Hidden Oasis tọa lạc tại vị trí lý tưởng, gần các địa điểm tham quan nổi tiếng, giúp bạn dễ dàng khám phá vùng đất mới.",
    },
    {
      icon: Banknote,
      title: "Giá cả hợp lý",
      description:
        "Chúng tôi cam kết cung cấp dịch vụ chất lượng cao với mức giá phải chăng, phù hợp với mọi nhu cầu của khách hàng.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.h1
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Giới thiệu về chúng tôi
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Chào mừng bạn đến với Hidden Oasis, nơi mang đến cho bạn trải nghiệm
          nghỉ dưỡng tuyệt vời như ở nhà. Chúng tôi hiểu rằng một kỳ nghỉ không
          chỉ là nơi để dừng chân, mà là một phần quan trọng trong chuyến hành
          trình của bạn. Chính vì vậy, Hidden Oasis được thiết kế với mục tiêu
          tạo ra không gian thoải mái, ấm cúng và đầy đủ tiện nghi, giúp bạn cảm
          thấy như đang ở trong chính ngôi nhà của mình.
        </motion.p>

        <motion.h2
          className="text-3xl font-semibold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Tại sao chọn Hidden Oasis?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              >
                <Card>
                  <CardContent className="flex items-start p-6">
                    <Icon className="w-12 h-12 text-blue-500 mr-4" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.h2
          className="text-3xl font-semibold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          Dịch vụ của chúng tôi:
        </motion.h2>

        <motion.ul
          className="list-disc list-inside text-lg text-gray-700 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
        >
          <li>Phòng nghỉ đầy đủ tiện nghi.</li>
          <li>Dịch vụ đưa đón và hướng dẫn tham quan.</li>
          <li>Món ăn địa phương tươi ngon.</li>
          <li>Các hoạt động giải trí, thể thao và thư giãn.</li>
        </motion.ul>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.5 }}
        >
          <p className="text-lg mb-4">
            Hãy để Hidden Oasis là nơi dừng chân lý tưởng trong chuyến hành
            trình của bạn. Chúng tôi mong muốn mang lại cho bạn những kỷ niệm
            khó quên và trải nghiệm tuyệt vời.
          </p>
        </motion.div>
      </div>

      {/* Sparkling effect */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(50)].map((_, index) => (
          <div
            key={index}
            className="absolute animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            ✨
          </div>
        ))}
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1); }
        }
        .animate-twinkle {
          animation: twinkle 5s infinite;
        }
      `}</style>
    </div>
  );
};

export default AboutUsPage;
