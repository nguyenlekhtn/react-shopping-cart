import CardGrid from "../CardGrid/index";
import "./styles.css";
import data from "../../Data";

export default function Shop() {
  console.log(data);

  return (
    <div className="shop">
      <header className="header">
        <h1 className="header_title">Shop</h1>
      </header>
      <CardGrid data={data} />
    </div>
  );
}
