import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Bell,
  Building2,
  Coffee,
  Headphones,
  Home,
  School,
} from "lucide-react";
import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ITEMS_PER_PAGE_DEFAULT = 7;
const ITEMS_PER_PAGE_MOBILE = 5;
const ITEMS_PER_PAGE_TABLET = 7;

// ❗ Dữ liệu giả
const mockRoomStyles = [
  { roomStyleID: 1, roomStyleName: "Đại Dương" },
  { roomStyleID: 2, roomStyleName: "Hoang dã" },
  { roomStyleID: 3, roomStyleName: "Việt Nam" },
  { roomStyleID: 4, roomStyleName: "Dân Chơi" },
  { roomStyleID: 5, roomStyleName: "Hàn Quốc" },
  { roomStyleID: 6, roomStyleName: "Hồng Kông" },
  { roomStyleID: 7, roomStyleName: "Boho" },
  { roomStyleID: 8, roomStyleName: "Scandinavian" },
];

const getIconForStyle = (styleName) => {
  switch (styleName) {
    case "Đại Dương":
      return Building2;
    case "Hoang dã":
      return Coffee;
    case "Việt Nam":
      return Home;
    case "Dân Chơi":
      return Bell;
    case "Hàn Quốc":
      return School;
    case "Hồng Kông":
      return Headphones;
    default:
      return Coffee;
  }
};

const StyleCategorySlider = () => {
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(ITEMS_PER_PAGE_DEFAULT);
  const navigate = useNavigate();

  useEffect(() => {
    // gắn icon vào data
    const categoriesWithIcons = mockRoomStyles.map((style) => ({
      ...style,
      icon: getIconForStyle(style.roomStyleName),
    }));
    setCategories(categoriesWithIcons);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(ITEMS_PER_PAGE_MOBILE);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(ITEMS_PER_PAGE_TABLET);
      } else {
        setItemsPerPage(ITEMS_PER_PAGE_DEFAULT);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleStyleSelection = useCallback(
    (roomStyleID, roomStyleName) => {
      navigate(`/room/roomStyle/${roomStyleID}`, {
        state: { roomStyleName },
      });
    },
    [navigate]
  );

  const handleNext = () => {
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.floor(categories.length / itemsPerPage))
    );
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const displayedCategories = categories.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="w-full max-w-5xl mx-auto px-12">
      <Carousel>
        <CarouselContent className="flex justify-center items-center -ml-2 md:-ml-4">
          {displayedCategories.map(({ roomStyleName, icon: Icon, roomStyleID }) => (
            <CarouselItem key={roomStyleID} className="pl-2 md:pl-4 basis-auto">
              <Button
                variant="ghost"
                className="flex flex-col items-center gap-1 min-w-[100px] h-auto py-2 hover:bg-transparent"
                aria-label={`Category: ${roomStyleName}`}
                onClick={() => handleStyleSelection(roomStyleID, roomStyleName)}
              >
                <div className="w-10 h-10 flex items-center justify-center">
                  {Icon && <Icon className="w-6 h-6" />}
                </div>
                <span className="text-sm font-medium text-gray-900">
                  {roomStyleName}
                </span>
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 -translate-x-1/2" onClick={handlePrevious} />
        <CarouselNext className="right-0 translate-x-1/2" onClick={handleNext} />
      </Carousel>
    </div>
  );
};

export default React.memo(StyleCategorySlider);
