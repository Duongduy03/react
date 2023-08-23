import React from "react";

const PayNow = () => {
  return (
    <div className="container mt-4">
      <form
        className="needs-validation"
        name="frmthanhtoan"
        method="post"
        action="#"
      >
        <input type="hidden" name="kh_tendangnhap" value="dnpcuong" />

        <div className="py-5 text-center">
          <i className="fa fa-credit-card fa-4x" aria-hidden="true"></i>
          <h2>Thanh toán</h2>
          <p className="lead">
            Vui lòng kiểm tra thông tin Khách hàng, thông tin Giỏ hàng trước khi
            Đặt hàng.
          </p>
        </div>

        <div className="row">
          <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Giỏ hàng</span>
              <span className="badge badge-secondary badge-pill">2</span>
            </h4>
            <ul className="list-group mb-3">
              <input type="hidden" name="sanphamgiohang[1][sp_ma]" value="2" />
              <input
                type="hidden"
                name="sanphamgiohang[1][gia]"
                value="11800000.00"
              />
              <input
                type="hidden"
                name="sanphamgiohang[1][soluong]"
                value="2"
              />

              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Apple Ipad 4 Wifi 16GB</h6>
                  <small className="text-muted">11800000.00 x 2</small>
                </div>
                <span className="text-muted">23600000</span>
              </li>
              <input type="hidden" name="sanphamgiohang[2][sp_ma]" value="4" />
              <input
                type="hidden"
                name="sanphamgiohang[2][gia]"
                value="14990000.00"
              />
              <input
                type="hidden"
                name="sanphamgiohang[2][soluong]"
                value="8"
              />

              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Apple iPhone 5 16GB White</h6>
                  <small className="text-muted">14990000.00 x 8</small>
                </div>
                <span className="text-muted">119920000</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Tổng thành tiền</span>
                <strong>143520000</strong>
              </li>
            </ul>

            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Mã khuyến mãi"
              />
              <div className="input-group-append">
                <button type="submit" className="btn btn-secondary">
                  Xác nhận
                </button>
              </div>
            </div>

            <div className="col-lg-12 mt-4">
              <div className="card bg-warning text-white rounded-3 text-center">
                <div className="card-body">
                  <div className="text-center">
                    <img
                      width="380"
                      src="https://scontent.xx.fbcdn.net/v/t1.15752-9/345468733_1248222509418482_3049722838830508435_n.jpg?stp=dst-jpg_s206x206&_nc_cat=104&ccb=1-7&_nc_sid=aee45a&_nc_ohc=uGe0FatD4pgAX-2P_lz&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTUgrfYbMC-NlqB9URN-IJydm4lWe8ZnxX4EEIKdfop0A&oe=64AA5962"
                      alt=""
                    />
                  </div>

                  <hr className="my-2" />

                  <button
                    type="button"
                    className="btn btn-info btn-block btn-lg"
                  >
                    <div className="d-flex justify-content-between">
                      <span>
                        pay online{" "}
                        <i className="fas fa-long-arrow-alt-right ms-2"></i>
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 order-md-1">
            <h4 className="mb-3">Thông tin khách hàng</h4>

            <div className="row">
              <div className="col-md-12">
                <label htmlFor="kh_ten">Họ tên</label>
                <input
                  type="text"
                  className="form-control"
                  name="kh_ten"
                  id="kh_ten"
                  value="Dương Nguyễn Phú Cường"
                  readOnly
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="kh_gioitinh">Giới tính</label>
                <input
                  type="text"
                  className="form-control"
                  name="kh_gioitinh"
                  id="kh_gioitinh"
                  value="Nam"
                  readOnly
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="kh_diachi">Địa chỉ</label>
                <input
                  type="text"
                  className="form-control"
                  name="kh_diachi"
                  id="kh_diachi"
                  value="130 Xô Viết Nghệ Tỉnh"
                  readOnly
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="kh_dienthoai">Điện thoại</label>
                <input
                  type="text"
                  className="form-control"
                  name="kh_dienthoai"
                  id="kh_dienthoai"
                  value="0915659223"
                  readOnly
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="kh_email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="kh_email"
                  id="kh_email"
                  value="phucuong@ctu.edu.vn"
                  readOnly
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="kh_ngaysinh">Ngày sinh</label>
                <input
                  type="text"
                  className="form-control"
                  name="kh_ngaysinh"
                  id="kh_ngaysinh"
                  value="11/6/1989"
                  readOnly
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="kh_cmnd">CMND</label>
                <input
                  type="text"
                  className="form-control"
                  name="kh_cmnd"
                  id="kh_cmnd"
                  value="362209685"
                  readOnly
                />
              </div>
            </div>

            <h4 className="mb-3">Hình thức thanh toán</h4>

            <div className="d-block my-3">
              <div className="custom-control custom-radio">
                <input
                  id="httt-1"
                  name="httt_ma"
                  type="radio"
                  className="custom-control-input"
                  required
                  value="1"
                />
                <label className="custom-control-label" htmlFor="httt-1">
                  Tiền mặt
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  id="httt-2"
                  name="httt_ma"
                  type="radio"
                  className="custom-control-input"
                  required
                  value="2"
                />
                <label className="custom-control-label" htmlFor="httt-2">
                  Chuyển khoản
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  id="httt-3"
                  name="httt_ma"
                  type="radio"
                  className="custom-control-input"
                  required
                  value="3"
                />
                <label className="custom-control-label" htmlFor="httt-3">
                  Ship COD
                </label>
              </div>
            </div>
            <hr className="mb-4" />
            <button
              className="btn btn-primary btn-lg btn-block"
              type="submit"
              name="btnDatHang"
            >
              Đặt hàng
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PayNow;
