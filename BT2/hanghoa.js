let danhsachhanghoa = [];
let danhsachbanhang = [];
let doanhthu = 0;

export class hanghoa {
  đinhdanh;
  ten;
  giathanh;
  nhaxansuat;
  giamgia;
  ngaynhap;
  constructor(đinhdanh, ten, giathanh, nhasanxuat, giamgia, ngaynhap) {
    this.đinhdanh = đinhdanh;
    this.ten = ten;
    this.giathanh = giathanh;
    this.nhaxansuat = nhasanxuat;
    this.giamgia = giamgia;
    this.ngaynhap = ngaynhap;
  }

  nhaphanghoa(data) {
    danhsachhanghoa.push(data);
    console.log(danhsachhanghoa);
  }
  banHang(data) {
    for (let i = 0; i < danhsachhanghoa.length; i++) {
      if (danhsachhanghoa[i].đinhdanh == data) {
        danhsachbanhang.push(danhsachhanghoa[i]);
        listhanghoa.splice(i, 1);
        console.log(danhsachbanhang);
        break;
      } else {
        continue;
      }
    }
  }
  kiemtradoanhthu() {
    for (let i = 0; i < danhsachbanhang.length; i++) {
      doanhthu = doanhthu + danhsachbanhang[i].giathanh;
    }
    console.log(doanhthu);
  }
}
