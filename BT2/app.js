import doan from "./doan.js";
import dogiadung from "./dogiadung.js";
import quanao from "./quanao.js";

let dogiadung1 = new dogiadung(
  "Đồ gia dụng",
  "Bếp",
  "2.000.000",
  "SunHouse",
  "10%",
  "20/1/2021"
);
let doan1 = new doan(
  "Đồ ăn",
  "BimBim",
  "20.000",
  "Orion",
  "5%",
  "10/4/2021",
  "cay"
);
let quanao1 = new quanao(
  "Quần áo",
  "Quần Jean",
  "300.000",
  "Louis Vuiton",
  "15%",
  "7/6/2019",
  "Trung Quốc",
  "Jean"
);

dogiadung2.nhaphanghoa(dogiadung1);
doan2.nhaphanghoa(doan1);
quanao2.nhaphanghoa(quanao1);

doan2.banhang("Bim Bim");
quanao2.banhang("Quàn Jean");
