import instance from "./instance";

const getAll = async () => {
  const res = await instance.get(`/products`);
  return res.data;
};
const get = async (id: string) => {
  const res = await instance.get(`/products/${id}`);
  return res;
};
const add = async (product: any) => {
  const res = await instance.post(`/products/add`, product);
  return res;
};
const update = async (product: any) => {
  const res = await instance.patch(`/products/update/${product._id}`, product);
  return res;
};
const remove = async (id: string) => {
  const res = await instance.delete(`/products/${id}`);
  return res;
};
export { getAll, get, add, update, remove };
