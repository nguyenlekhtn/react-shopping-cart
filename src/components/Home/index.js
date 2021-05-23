import backgroundImg from "../../assets/images/haxxor.png";
import "./styles.css";
import { Link } from "react-router-dom";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export default function Home() {
  const homeStyle = {
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "auto",
    backgroundPosition: "95% center",
    backgroundColor: "#2b2a32",
  };

  return (
    <div className="home" style={homeStyle}>
      <div className="info">
        <h1>HonkekShop</h1>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ipsa!
        </span>

        <div className="icon-wrapper">
          <FaChevronRight />
          <Link to="/shop">
            <button type="button">Shop now</button>
          </Link>
          <FaChevronLeft />
        </div>
      </div>
    </div>
  );
}
