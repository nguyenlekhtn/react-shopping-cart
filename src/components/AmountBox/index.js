import { FaPlusCircle, FaMinusCircle, IconContext } from "react-icons/fa";
import styles from "./AmountBox.module.css";

export default function AmountBox({ amount, handleAmountChange }) {
  const handlePlusClick = (e) => {
    handleAmountChange(amount + 1);
  };

  const handleMinusClick = (e) => {
    handleAmountChange(amount - 1);
  };

  const handleChange = (e) => {
    handleAmountChange(e.target.value);
  };

  return (
    <div className={styles.amountBox}>
      <button className={styles.iconButton} onClick={handleMinusClick}>
        <FaMinusCircle />
      </button>
      <input type="number" value={amount} onChange={handleChange} />
      <button className={styles.iconButton} onClick={handlePlusClick}>
        <FaPlusCircle />
      </button>
    </div>
  );
}
