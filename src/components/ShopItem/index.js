import "./styles.css";

export default function CardItem({ data }) {
  const { name, img, price } = data;

  return (
    <div className="card">
      <img src={img} alt={name} className="card_pic" />
      <span className="card_name">{name}</span>
      <span className="card_price">$ {price}</span>
    </div>
  );
}
