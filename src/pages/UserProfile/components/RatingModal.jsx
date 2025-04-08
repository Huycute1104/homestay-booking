"use client";

import { Button } from "../../../components/ui/button";
import { Label } from "../../../components/ui/label";
import { Textarea } from "../../../components/ui/textarea";
import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";
import React, { useEffect, useState } from "react";

const RatingModal = ({
  isOpen,
  closeModal,
  booking,
  userID,
  homeStayList,
  submitRating,
}) => {
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedComment, setSelectedComment] = useState("");
  const [isHovering, setIsHovering] = useState(null);

  const homeStay = homeStayList.find(
    (homeStay) => homeStay.homeStayID === booking.homeStayID
  );

  useEffect(() => {
    if (isOpen) {
      setSelectedRating(null);
      setSelectedComment("");
    }
  }, [isOpen]);

  const handleRatingChange = (value) => {
    setSelectedRating(Number(value));
  };

  const handleSubmitRating = () => {
    if (selectedRating === null || selectedComment.trim() === "") {
      alert("Vui lòng cung cấp cả đánh giá và bình luận.");
      return;
    }

    const ratingData = {
      bookingCode: booking.bookingCode,
      userID: userID,
      homeStayID: booking?.homeStayID,
      rating: selectedRating,
      comment: selectedComment,
    };

    submitRating(ratingData);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeModal();
        }}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-md shadow-2xl"
        >
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-[#AED1FF] to-[#2CB0ED] bg-clip-text text-transparent">
                Đánh giá Homestay
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mt-2 text-lg">
                {homeStay?.homeStayName}
              </p>

              <div className="mt-4 py-3 px-5 bg-gray-100 rounded-xl shadow-md">
                <p className="text-xl font-semibold text-blue-600 mb-2">
                  Mã Đặt Phòng
                </p>
                <p className="text-lg font-medium text-gray-700">
                  {booking.bookingCode}
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Đánh giá của bạn</Label>
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <motion.button
                    key={rating}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleRatingChange(rating.toString())}
                    onMouseEnter={() => setIsHovering(rating)}
                    onMouseLeave={() => setIsHovering(null)}
                  >
                    <Star
                      className={`w-8 h-8 transition-colors ${
                        rating <= (isHovering ?? selectedRating ?? 0)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Bình luận của bạn</Label>
              <Textarea
                value={selectedComment}
                onChange={(e) => setSelectedComment(e.target.value)}
                placeholder="Chia sẻ trải nghiệm của bạn..."
                className="min-h-[100px] resize-none"
              />
            </div>

            <div className="flex gap-3 justify-end">
              <Button variant="outline" onClick={closeModal} className="w-24">
                Đóng
              </Button>
              <Button
                onClick={handleSubmitRating}
                className="w-32 bg-gradient-to-r from-[#AED1FF] to-[#2CB0ED] hover:to-purple-700"
                disabled={!selectedRating || !selectedComment.trim()}
              >
                Gửi Đánh Giá
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RatingModal;
