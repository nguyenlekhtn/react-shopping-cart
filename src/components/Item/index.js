import { Link, useParams } from "react-router-dom";
// import { FaCartPlus, FaArrowLeft } from "react-icons/fa";
import Data from "../../Data";
import "./styles.css";
import { loremIpsum } from "react-lorem-ipsum";

export default function Item() {
  let { itemId } = useParams();
  console.log(itemId);
  const data = Data.filter((item) => item.id === parseInt(itemId))[0];
  console.log(data);
  return (
    <div className="container">
      <div className="wrapper">
        <div className="img-wrapper">
          <img src={data.img} alt={data.name} className="itemPic" />
        </div>
        <div className="info-wrapper">
          <h3 className="item_name">{data.name}</h3>
          <p className="item_desc">
            Description: {loremIpsum({ avgSentencesPerParagraph: 3 })}
          </p>
          <p className="item_price">$ {data.price}</p>
          <div className="icon-wrapper">
            <Link>
              <button className="button addToCart" type="button">
                Add to Cart
              </button>
            </Link>
            <div class="icon-wrapper_bottom">
              <Link to="/cart">
                <button className="button checkout" type="button">
                  checkout
                </button>
              </Link>
              <Link>
                <button className="button back" type="button">
                  Back to Shop
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
