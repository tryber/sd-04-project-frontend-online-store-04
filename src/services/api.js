export async function getCategories() {
  const categories = await fetch(
    'https://api.mercadolibre.com/sites/MLB/categories',
  )
    .then((result) => result.json())
    .then((data) => data.map((categorie) => categorie));
  return new Promise((resolve) => {
    resolve(categories);
  });
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // implement here
}
