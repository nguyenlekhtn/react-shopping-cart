function importAllImages(folder) {
  let images = {};
  import("import-all.macro").then((importAll) => {
    images = importAll.sync(`${folder}*.jpg`);
  });

  return images;
}

export { importAllImages };
