import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../assets/css/cart.css";
import { getCartByUser, remove } from "../../../api/cart";
import { Modal, message } from "antd";

const Cart = () => {
  const user = JSON.parse(localStorage.getItem("user") as string);
  //   console.log(user);

  const [cart, setCart] = useState<any>([]);
  //   console.log(cart);
  //   const cart1 = cart.map((d: any) => d._id);
  //   console.log(cart1);

  useEffect(() => {
    getCartByUser(user).then(({ data }) => setCart(data.data));
  }, []);
  const handleRemove = async (id: string) => {
    // console.log(id);

    try {
      Modal.confirm({
        title: "Thông báo",
        content: "Bạn có chắc chắn hủy đơn đặt hàng này không ?",
        okText: "Xoá",
        cancelText: "Huỷ",
        okButtonProps: {
          className:
            "bg-green-500 hover:bg-green-700 text-white font-bold rounded", // áp dụng lớp CSS
        },
        onOk: async () => {
          const loading = message.loading({
            content: "Loading...",
            duration: 0,
          });
          setTimeout(async () => {
            if (loading) {
              loading();
            }

            const response = await remove(id);
            if (response) {
              message.success("Xóa hàng thành công!", 3);
              const dataNew = cart?.filter((data: any) => data._id !== id);
              setCart(dataNew);
            }
          }, 2000);
        },
        onCancel: () => {
          message.success("Đã huỷ !");
        },
      });
    } catch (error: any) {
      message.error(error.response.data.message, 5);
    }
  };

  return (
    <div>
      <h2 className="text-center">Giỏ Hàng</h2>
      <div className="container">
        <table id="cart" className="table table-hover table-condensed">
          <thead>
            <tr>
              <th style={{ width: 50 }}>Tên sản phẩm</th>
              <th style={{ width: 10 }}>Giá</th>
              <th style={{ width: 10 }}>Kích cỡ</th>
              <th style={{ width: 8 }}>Số lượng</th>
              <th style={{ width: 22 }} className="text-center">
                Thành tiền
              </th>
              <th style={{ width: 10 }}></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((c: any) => {
              return (
                <tr key={c._id}>
                  <td data-th="Product">
                    <div className="row">
                      <div className="col-sm-2 hidden-xs">
                        <img
                          src="/src/assets/images/img12.png"
                          alt="Sản phẩm 1"
                          className="img-responsive"
                          width="100"
                        />
                      </div>
                      <div className="col-sm-10">
                        <h4 className="nomargin">
                          {c.items.map((i: any) => i.name)}
                        </h4>
                      </div>
                    </div>
                  </td>
                  <td data-th="Price"> {c.items.map((i: any) => i.price)} đ</td>
                  <td data-th="Price"> {c.items.map((i: any) => i.size)}</td>
                  <td data-th="Quantity">
                    <input
                      className="form-control text-center"
                      value={c.items.map((i: any) => i.quantity)}
                      type="number"
                    />
                  </td>
                  <td data-th="Subtotal" className="text-center">
                    {c.items.map((i: any) => i.price * i.quantity)} đ
                  </td>
                  <td className="actions" data-th="">
                    <button
                      className="btn btn-info btn-sm"
                      onClick={() => handleRemove(c._id)}
                    >
                      <i className="fa fa-edit">xóa</i>
                    </button>
                    <button className="btn btn-danger btn-sm">
                      <i className="fa fa-trash-o">sửa</i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td>
                <Link to="/products" className="btn btn-warning">
                  <i className="fa fa-angle-left"></i> Tiếp tục mua hàng
                </Link>
              </td>
              <td colSpan={2} className="hidden-xs"></td>
              <td className="hidden-xs text-center">
                <strong>Tổng tiền 4000 đ</strong>
              </td>
              <td>
                <Link to="/paynow" className="btn btn-success btn-block">
                  pay now<i className="fa fa-angle-right"></i>
                </Link>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Cart;
