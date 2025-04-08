import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to={"/"}>
          <FaHome size={40} color="#000" />
        </Link>
      </div>
      <div className={styles.headerTextContainer}>
        <h1 className={styles.headerText}>
          Đăng ký thành viên để nhận nhiều ưu đãi
        </h1>
        <p className={styles.headerSubtext}>
          Nhanh chóng, tiện lợi và an toàn. Đăng ký liền tay, rinh ngay quyền
          lợi.
        </p>
      </div>
    </header>
  );
}
