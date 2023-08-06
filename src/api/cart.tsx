import instance from "./instance";
import { useState, useEffect } from "react";
const getAllCart = async () => {
  const res = await instance.get(`/carts`);
  return res;
};
const getOneCart = async (id: string) => {
  const res = await instance.get(`/carts/${id}`);
  return res;
};

const addCart = async (cart: any) => {
  const res = await instance.post(`/carts/add`, cart);
  return res;
};

const updateCart = async (cart: any) => {
  const res = await instance.patch(`/carts/update/${cart._id}`, cart);
  return res;
};

const getCartByUser = async (user: any) => {
  const res = await instance.get(`/carts/user/${user._id}`);
  return res;
};
const remove = async (id: any) => {
  const res = await instance.delete(`/carts/${id}`);
  return res;
};
export { getAllCart, getOneCart, addCart, updateCart, getCartByUser, remove };
