import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import "./styles.css";

export default function AmountBox({ amount, style }) {
  return (
    <div className="amountBox" style={style}>
      <button className="iconButton">
        <FaMinusCircle />
      </button>
      <input type="number" value={amount} />
      <button className="iconButton">
        <FaPlusCircle />
      </button>
    </div>
  );
}
