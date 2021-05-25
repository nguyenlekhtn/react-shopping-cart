import styles from "./CheckoutItem.module.css";
import AmountBox from "../AmountBox/index";

export default function CheckOutItem(props) {
  const { img, name, amount, price } = props.data;
  return (
    <li className={styles.checkOutItem}>
      <img src={img} alt={name} className={styles.itemPic} />
      <div className={styles.info}>
        <div className={styles.main}>
          <span>{name}</span>
          <span>${price}</span>
        </div>
        <div className={styles.amountBoxWrapper}>
          <AmountBox
            amount={amount}
            handleAmountChange={props.handleAmountChange}
          />
        </div>
      </div>
    </li>
  );
}
