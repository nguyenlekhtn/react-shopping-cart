import "./styles.css";
import AmountBox from "../AmountBox/index";

import { Avatar, name as loremName } from "react-lorem-ipsum";

export default function CheckOutItem({ img, name, amount, price }) {
  return (
    <div className="checkOutItem">
      {/* <img src={img} alt={name} /> */}
      <Avatar />
      <div className="checkOutItem_info">
        <div className="checkOutItem_info_main">
          <span>{loremName()}</span>
          <span>$ 1.99</span>
        </div>
        <AmountBox amount={1} />
      </div>
    </div>
  );
}
