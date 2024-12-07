import { IoLogoDribbble, IoIosHeartEmpty } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { GiShoppingBag } from "react-icons/gi";
import styles from "./SiteHeader.module.css";
import { CgProfile } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa6";
const SiteHeader = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.HeaderUpSec}>
        <div className={styles.HeaderLogo}>
          <IoLogoDribbble size={50} />
        </div>
        <div className={styles.HeaderTitle}>
          <h1>LOGO</h1>
        </div>
        <div className={styles.HeaderIcos}>
          <CiSearch size={30} />
          <IoIosHeartEmpty className={styles.IconeSpace} size={30} />
          <GiShoppingBag size={30} />
          <CgProfile className={styles.IconeSpace} size={30} />
          <h4>ENG</h4>
          <FaAngleDown size={30} />
        </div>
      </div>
      <div className={styles.HeaderLowSec}>
        <header className={styles.navbar}>
          <ul className={styles.navMenu}>
            <li>
              <a href="#" className={styles.navLink}>
                SHOP
              </a>
            </li>
            <li>
              <a href="#" className={styles.navLink}>
                SKILLS
              </a>
            </li>
            <li>
              <a href="#" className={styles.navLink}>
                STORIES
              </a>
            </li>
            <li>
              <a href="#" className={styles.navLink}>
                ABOUT
              </a>
            </li>
            <li>
              <a href="#" className={styles.navLink}>
                CONTACT US
              </a>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
};

export default SiteHeader;
