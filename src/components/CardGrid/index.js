import ShopItem from "../ShopItem/index";
import styles from "./CardGrid.module.css";
import { useRouteMatch, Link } from "react-router-dom";

export default function CardGrid({ data }) {
  let match = useRouteMatch();
  const items = data.map((item) => (
    <Link key={item.id} to={`${match.url}/${item.id}`} className={styles.link}>
      <ShopItem data={item} />
    </Link>
  ));

  return <div className={styles.cardGrid}>{items}</div>;
}
