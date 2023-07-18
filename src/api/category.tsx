import instance from "./instance";
const getAllCate = async () => {
  const res = await instance.get(`/categories`);
  return res.data;
};
const getCate = async (id: string) => {
  const res = await instance.get(`/categories/${id}`);
  return res;
};
const addCate = async (category: any) => {
  const res = await instance.post(`/categories/add`, category);
  return res;
};
const updateCate = async (category: any) => {
  const res = await instance.patch(
    `/categories/update/${category._id}`,
    category
  );
  return res;
};
const removeCate = async (id: string) => {
  const res = await instance.delete(`/categories/${id}`);
  return res;
};
export { getAllCate, getCate, addCate, updateCate, removeCate };
