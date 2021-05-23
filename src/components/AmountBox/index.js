import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import "./styles.css";

export default function AmountBox({ amount }) {
  return (
    <div className="amoutBox">
      <button className="amountBox_button">
        <FaPlusCircle />
      </button>
      <input type="number" value={amount} />
      <button className="amountBox_button">
        <FaMinusCircle />
      </button>
    </div>
  );
}
