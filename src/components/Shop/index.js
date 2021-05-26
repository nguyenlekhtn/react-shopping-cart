import styles from "./Shop.module.css";

export default function Shop(props) {
  return (
    <div className={styles.shop}>
      <header className="header">
        <h1 className="header_title">Shop</h1>
      </header>
      {props.children}
    </div>
  );
}
