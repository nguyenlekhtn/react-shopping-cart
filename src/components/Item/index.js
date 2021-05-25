import { Link, useParams } from "react-router-dom";
// import { FaCartPlus, FaArrowLeft } from "react-icons/fa";
import Data from "../../Data";
import "./styles.css";
import { loremIpsum } from "react-lorem-ipsum";
import AmountBox from "../AmountBox";
import { useState } from "react";

export default function Item(props) {
  let { itemId } = useParams();
  itemId = parseInt(itemId);
  const [amount, setAmount] = useState(1);
  const data = Data.filter((item) => item.id === parseInt(itemId))[0];

  const handleClickAddToCart = (e) => {
    props.setCartItemsList((prevList) => {
      if (prevList.filter((item) => item.itemId === itemId).length === 0) {
        return [...prevList, { itemId, amount }];
      } else {
        const newList = prevList.map((item) => {
          if (item.itemId === itemId) {
            return { ...item, amount: item.amount + amount };
          }
          return item;
        });
        return newList;
      }
    });
    setAmount(1);
  };

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
          <AmountBox handleAmountChange={setAmount} amount={amount} />
          <div className="icon-wrapper">
            <button
              className="button addToCart"
              type="button"
              onClick={handleClickAddToCart}
            >
              Add to Cart
            </button>

            <div className="icon-wrapper_bottom">
              <Link to="/cart">
                <button className="button checkout" type="button">
                  checkout
                </button>
              </Link>
              <Link to="/shop">
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
