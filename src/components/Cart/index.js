import CheckOutItem from "../CheckoutItem/index";

export default function Cart() {
  return (
    <div className="cart">
      <h1 className="cart">Cart</h1>

      <div className="checkoutItemGrid">
        <CheckOutItem />
        <CheckOutItem />
      </div>
    </div>
  );
}
