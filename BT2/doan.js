import hanghoa from "./hanghoa.js";

export class doan extends hanghoa {
  vi;
  contructor(đinhdanh, ten, giathanh, nhasanxuat, giamgia, ngaynhap, vi) {
    super(đinhdanh, ten, giathanh, nhasanxuat, giamgia, ngaynhap, vi);
    this.vi = vi;
  }
}
