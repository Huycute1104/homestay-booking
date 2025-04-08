"use client";

import Footer from "../../components/app/Footer/Footer";
import Header1 from "../../components/app/Header/Header1";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Mail } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <Header1 />
      <div className="container mx-auto px-4 py-8 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Liên Hệ Với Chúng Tôi
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          <Card className="flex-1 border-gray-200 bg-white shadow-lg">
            <CardHeader className="bg-gray-100">
              <CardTitle className="text-gray-800">Thông Tin Liên Hệ</CardTitle>
              <CardDescription className="text-gray-600">
                Chúng tôi luôn sẵn sàng hỗ trợ bạn
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-4">
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Địa chỉ:</strong> 710 Trần Cao Vân Xuân Hà, Thanh Khê,
                  Đà Nẵng, Việt Nam
                </p>
                <p>
                  <strong>Điện thoại: </strong>
                  <a
                    href="https://zalo.me/0392791409"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 font-semibold underline hover:text-blue-700"
                  >
                    0392791409
                  </a>
                </p>
                <p>
                  <strong>Email:</strong> hiddenoasis.homestaybooking@gmail.com
                </p>
                <p>
                  <strong>Giờ Mở Cửa:</strong> 24/7 hàng ngày
                </p>
              </div>
              <div className="mt-6 flex justify-center">
                <Mail className="w-16 h-16 text-gray-500 animate-bounce" />
              </div>
            </CardContent>
          </Card>

          <Card className="flex-1 border-gray-200 bg-white shadow-lg">
            <CardHeader className="bg-gray-100">
              <CardTitle className="text-gray-800">Form Liên Hệ</CardTitle>
              <CardDescription className="text-gray-600">
                Gửi yêu cầu hoặc câu hỏi của bạn
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Họ và tên
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-gray-500 focus:ring-gray-500 rounded-xl"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-gray-500 focus:ring-gray-500 rounded-xl"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Số điện thoại
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-gray-500 focus:ring-gray-500 rounded-xl"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Tin nhắn
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-gray-500 focus:ring-gray-500 rounded-xl"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 py-5 px-5 rounded-xl"
                >
                  Gửi yêu cầu
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}
