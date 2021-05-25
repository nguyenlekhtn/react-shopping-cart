import "./styles.css";

export default function Shop(props) {
  return (
    <div className="shop">
      <header className="header">
        <h1 className="header_title">Shop</h1>
      </header>
      {props.children}
    </div>
  );
}
