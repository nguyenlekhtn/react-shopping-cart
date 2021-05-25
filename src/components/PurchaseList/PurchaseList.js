import CheckOutItem from "../CheckoutItem";
import styles from "./PurchaseList.module.css";

export default function PurchaseList(props) {
  const { cartItemsList, products, changeCartItemAmount } = props;

  console.log({ cartItemsList, products });

  const list = cartItemsList.map((item) => {
    const productData = products.filter(
      (product) => product.id === item.itemId
    )[0];
    const data = {
      img: productData.img,
      name: productData.name,
      price: productData.price,
      amount: item.amount,
    };
    return (
      <CheckOutItem
        data={data}
        key={productData.id}
        handleAmountChange={(newAmount) =>
          changeCartItemAmount(productData.id, newAmount)
        }
      />
    );
  });

  return <ul className={styles.list}>{list}</ul>;
}
