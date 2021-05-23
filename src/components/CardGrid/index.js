import CardItem from "../ShopItem/index";
import "./styles.css";
import { useRouteMatch, Link } from "react-router-dom";

export default function CardGrid({ data }) {
  let match = useRouteMatch();
  const items = data.map((item) => (
    <Link key={item.id} to={`${match.url}/${item.id}`}>
      <CardItem data={item} />
    </Link>
  ));

  return <div className="cardGrid">{items}</div>;
}
