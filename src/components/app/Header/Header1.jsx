import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, LogOut, Menu, User } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "TRANG CHỦ", path: "/" },
  { label: "HOMESTAY", path: "/homestay" },
  { label: "VỀ CHÚNG TÔI", path: "/aboutus" },
  { label: "LIÊN HỆ", path: "/contact" },
  //{ label: "LỊCH SỬ GIAO DỊCH", path: "/booking-history" },
];

const NavLink = ({ label, path, isActive, onClick }) => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Link
      to={path}
      onClick={onClick}
      className={`relative text-sm font-semibold no-underline transition-colors ${
        isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
      }`}
    >
      {label}
      {isActive && (
        <motion.div
          layoutId="underline"
          className="absolute left-0 right-0 h-0.5 bg-blue-600 bottom-[-4px]"
          initial={false}
        />
      )}
    </Link>
  </motion.div>
);

export default function Header1() {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isLoggedIn = !!localStorage.getItem("accessToken");

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    const storedAvatar = localStorage.getItem("avatar");
    if (storedName) setName(storedName);
    if (storedAvatar) setAvatar(storedAvatar);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("avatar");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/login");
  };

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: isScrolled
          ? "rgba(208, 241, 255, 0.95)"
          : "rgba(208, 241, 255, 0.9)",
        backdropFilter: isScrolled ? "blur(10px)" : "blur(0px)",
      }}
      className="sticky top-0 z-50 w-full shadow-sm bg-gradient-to-r from-[#d0f1ff] to-[#a7e2ff]"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sheet className="hidden md:block">
              <SheetTrigger>
                <div className="block md:hidden">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Menu className="h-6 w-6 text-gray-700" />
                  </motion.div>
                </div>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[300px] sm:w-[400px] bg-gradient-to-b from-[#d0f1ff] to-[#a7e2ff]"
              >
                <SheetHeader>
                  <SheetTitle className="text-2xl font-bold text-gray-800">
                    Menu
                  </SheetTitle>
                </SheetHeader>
                <motion.div
                  className="flex flex-col space-y-6 mt-8"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
                >
                  {navLinks.map((link) => (
                    <motion.div
                      key={link.path}
                      whileHover={{ x: 10 }}
                      className="border-b border-blue-100/50 pb-4"
                    >
                      <Link
                        to={link.path}
                        className={`text-lg font-medium ${
                          location.pathname === link.path
                            ? "text-blue-600"
                            : "text-gray-600 hover:text-blue-600"
                        } transition-colors`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </SheetContent>
            </Sheet>

            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/">
                <img
                  src="https://res.cloudinary.com/dmyyf65yy/image/upload/v1735831989/Logo_HomyGoV1_szyluv-removebg-preview_b90k84.png"
                  alt="Logo"
                  className="h-12 w-12 object-cover rounded-full shadow-md"
                />
              </Link>
            </motion.div>
          </div>

          <nav className="hidden md:flex items-center justify-center space-x-8 ml-18">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                isActive={location.pathname === link.path}
                onClick={() => navigate(link.path)}
                {...link}
              />
            ))}
          </nav>

          <div className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.button
                  className="flex items-center gap-3 focus:outline-none"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {name && (
                    <span className="font-medium text-sm hidden md:inline-block text-gray-700">
                      {name}
                    </span>
                  )}
                  <div className="flex items-center justify-between bg-white/80 backdrop-blur-sm rounded-full px-3 py-2 shadow-md hover:shadow-lg transition-all duration-300">
                    <ChevronDown className="w-4 h-4 text-gray-600 mr-2" />
                    {avatar ? (
                      <Avatar className="h-8 w-8 border-2 border-white shadow-sm">
                        <AvatarImage src={avatar} alt={name} />
                        <AvatarFallback className="text-sm bg-blue-50 text-blue-600">
                          {name && name.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    ) : (
                      <Avatar className="h-8 w-8 border-2 border-white shadow-sm">
                        <AvatarFallback className="text-sm bg-blue-50 text-blue-600">
                          U
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                </motion.button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                className="w-56 mt-2 p-2 bg-white/95 backdrop-blur-sm"
                sideOffset={5}
              >
                <AnimatePresence>
                  {!isLoggedIn ? (
                    <>
                      <DropdownMenuItem className="p-0">
                        <Link
                          to="/login"
                          className="flex w-full items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                        >
                          <User className="w-4 h-4" />
                          Đăng nhập
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="p-0">
                        <Link
                          to="/register"
                          className="flex w-full items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                        >
                          <User className="w-4 h-4" />
                          Đăng Ký
                        </Link>
                      </DropdownMenuItem>
                    </>
                  ) : (
                    <>
                      <DropdownMenuItem className="p-0">
                        <Link
                          to="/users-profile"
                          className="flex w-full items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                        >
                          <User className="w-4 h-4" />
                          Thông tin
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors cursor-pointer"
                        onClick={handleLogout}
                      >
                        <LogOut className="w-4 h-4" />
                        Đăng xuất
                      </DropdownMenuItem>
                    </>
                  )}
                </AnimatePresence>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
