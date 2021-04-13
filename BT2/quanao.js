import hanghoa from "./hanghoa.js";

export class quanao extends hanghoa {
  xuatxu;
  chatlieu;
  constructor(
    đinhdanh,
    ten,
    giathanh,
    nhasanxuat,
    giamgia,
    ngaynhap,
    xuatxu,
    chatlieu
  ) {
    super(
      đinhdanh,
      ten,
      giathanh,
      nhasanxuat,
      giamgia,
      ngaynhap,
      xuatxu,
      chatlieu
    );
    this.xuatxu = xuatxu;
    this.chatlieu = chatlieu;
  }
}
