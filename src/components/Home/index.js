import backgroundImg from "../../assets/images/haxxor.png";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Home() {
  const homeStyle = {
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "auto",
    backgroundPosition: "95% center",
    backgroundColor: "#2b2a32",
  };

  return (
    <div className={styles.home} style={homeStyle}>
      <div className={styles.info}>
        <h1 className={styles.title}>HonkekShop</h1>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ipsa!
        </span>

        <div className={styles.iconWrapper}>
          <IconContext.Provider value={{ className: styles.icon }}>
            <FaChevronRight />
            <Link to="/shop">
              <button type="button" className={styles.button}>
                Shop now
              </button>
            </Link>
            <FaChevronLeft />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}
