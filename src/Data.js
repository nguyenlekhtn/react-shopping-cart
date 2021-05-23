function importAll(r) {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item).default;
  });
  return images;
}

const Data = (() => {
  const images = importAll(
    require.context("./assets/images/items/", false, /\.(png|jpe?g|svg)$/)
  );

  console.log(images);

  return [
    {
      id: 1,
      name: "Mei figure",
      img: images["mei.jpg"],
      price: 25.99,
    },
    {
      id: 2,
      name: "Kiana figure",
      img: images["kiana.jpg"],
      price: 24.99,
    },
  ];
})();

export default Data;
