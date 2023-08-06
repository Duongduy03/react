export const addProduct = (product: any) => {
  return {
    type: "ADD_PRODUCT",
    payload: product,
  };
};
export const updateProduct = (product: any) => {
  return {
    type: "UPDATE_PRODUCT",
    payload: product,
  };
};
