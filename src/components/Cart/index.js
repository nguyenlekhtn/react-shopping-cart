import CheckOutItem from "../CheckoutItem/index";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";

export default function Cart(props) {
  const handleClick = () => {
    alert("Hohoho thank you");
    props.setCartItemsList([]);
  };

  console.log(props.totalPay);

  return (
    <div className={styles.cart}>
      <h1 className={styles.title}>Cart</h1>

      <div className={styles.innerContainer}>
        {props.purchaseList}
        <div className={styles.payment_info}>
          <span>Total: ${props.totalPay}</span>
          <div className={styles.buttonWrapper}>
            <button className={styles.button} onClick={handleClick}>
              Proceed to Payment
            </button>
            <Link to="/shop">
              <button className={styles.button}>Back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
