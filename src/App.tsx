import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigate,
} from "react-router-dom";
import ClientLayout from "./layouts/ClientLayout";
import HomePage from "./pages/client/HomePage";
import ProductList from "./pages/client/products/ProductList";
import About from "./pages/client/About";
import Blogs from "./pages/client/Blogs";
import Contact from "./pages/client/Contact";
import Login from "./pages/client/Login";
import Register from "./pages/client/Register";
import NotFound from "./pages/client/NotFound";
import Dashboard from "./pages/admin/Dashboard";
import AdminLayout from "./layouts/AdminLayout";
import AddProduct from "./pages/admin/products/AddProduct";
import ListProduct from "./pages/admin/products/ProductList";
import UpdateProduct from "./pages/admin/products/UpdateProduct";
import ListCategory from "./pages/admin/categories/ListCategory";
import AddCategory from "./pages/admin/categories/AddCategory";
import UpdateCategory from "./pages/admin/categories/UpdateCategory";
import ProductDetail from "./pages/client/products/ProductDetail";
import { add, getAll, remove, update } from "./api/product";
import { addCate, getAllCate, removeCate, updateCate } from "./api/category";
// import "./App.css";

function App() {
  const [products, setProduct] = useState<any>([]);
  const [categories, setCategory] = useState<any>([]);

  useEffect(() => {
    getAll().then((data) => setProduct(data.docs));
  }, []);

  useEffect(() => {
    getAllCate().then((data) => setCategory(data));
  }, []);
  const onHandleAdd = async (category: any) => {
    const { data: data } = await addCate(category);
    // console.log(data);
    setCategory([...categories, data.data]);
  };
  const onHandleRemove = (id: any) => {
    const confirm = window.confirm("Bạn có chắc muốn xóa không?");
    if (confirm) {
      const newCate = categories.filter((category: any) => category._id !== id);
      removeCate(String(id))
        .then(() => setCategory(newCate))
        .then(() => alert("Xóa thành công"));
    }
  };
  const handleAddProduct = async (product: any) => {
    const { data } = await add(product);
    // console.log(data);
    setProduct([...products, data.data]);
    // setProduct([...products,data])
  };
  const onHandleUpdate = async (product: any) => {
    const newData = products.filter((pro: any) => pro._id != product._id);
    const { data } = await update(product);
    // console.log(data);
    setProduct([...newData, data.data]);
  };
  const handleUpdateCate = async (category: any) => {
    const { data } = await updateCate(category);
    // console.log(data);
    const newCate = categories.filter((cate: any) => cate._id != category._id);
    // console.log(newCate);
    setCategory([...newCate, data.data]);
  };
  const router = createBrowserRouter([
    // Client
    {
      path: "/",
      element: <ClientLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/products", element: <ProductList products={products} /> },
        { path: "/products/:id", element: <ProductDetail /> },
        { path: "/about", element: <About /> },
        { path: "/blog", element: <Blogs /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
    // Admin
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        { path: "/admin", element: <Dashboard /> },
        // Products
        {
          path: "/admin/products",
          element: <ListProduct products={products} />,
        },
        {
          path: "/admin/products/add",
          element: (
            <AddProduct handleAdd={handleAddProduct} categories={categories} />
          ),
        },
        {
          path: "/admin/products/update/:id",
          element: (
            <UpdateProduct
              products={products}
              categories={categories}
              onUpdate={onHandleUpdate}
            />
          ),
        },

        // Categories
        {
          path: "/admin/categories",
          element: (
            <ListCategory
              categories={categories}
              handleRemove={onHandleRemove}
            />
          ),
        },
        {
          path: "/admin/categories/add",
          element: <AddCategory handleAdd={onHandleAdd} />,
        },
        {
          path: "/admin/categories/update/:id",
          element: (
            <UpdateCategory
              categories={categories}
              onUpdate={handleUpdateCate}
            />
          ),
        },
      ],
    },
    //
    { path: "*", element: <NotFound /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
