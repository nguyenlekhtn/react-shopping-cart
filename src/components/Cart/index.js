import CheckOutItem from "../CheckoutItem/index";
import "./styles.css";

export default function Cart() {
  return (
    <div className="cart">
      <h1 className="cart_title">Cart</h1>

      <div className="container">
        <div className="checkoutItemGrid">
          <CheckOutItem />
          <CheckOutItem />
        </div>
        <div className="payment_info">
          <span>Total: $100</span>
        </div>
      </div>
    </div>
  );
}
