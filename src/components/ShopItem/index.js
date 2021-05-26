import styles from "./ShopItem.module.css";

export default function CardItem({ data }) {
  const { name, img, price } = data;

  return (
    <div className={styles.card}>
      <img src={img} alt={name} className={styles.card_pic} />
      <span className={styles.name}>{name}</span>
      <span className={styles.price}>$ {price}</span>
    </div>
  );
}
