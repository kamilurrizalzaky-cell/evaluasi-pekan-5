/* program hitung transaksi kedai senja */
const namaKedai = "Kedai Senja";
const HARGA_KOPI = 18000;
const HARGA_ROTI = 15000;
const TARIF_PAJAK = 0.11;
let jumlahKopi = 3;
let jumlahRoti = 2;
let transaksiSelesai = 0;

// jumlah seluruh item. seharusnya: 5
let jumlahItem = jumlahKopi + jumlahRoti;

// subtotal. seharusnya: 84000
let subtotal = (HARGA_KOPI * jumlahKopi) + (HARGA_ROTI * jumlahRoti);

// pajak 11% dari subtotal setelah dipotong diskon 10000. seharusnya: 8140
let pajak = (subtotal - 10000) * TARIF_PAJAK;

// total bayar. seharusnya 100000. cukup? seharusnya: true
let uangBayar = 100000;
let uangCukup = uangBayar >= TotalBayar;

// kembalian. seharusnya: 17860
let kembalian = uangBayar - TotalBayar;

// jumlah item genap? seharusnya: false
let itemGenap = jumlahItem % 2 === 0;

// transaksi selesai bertambah 1. seharusnya: 1
transaksiSelesai += 1;

console.log(namaKedai, jumlahItem, subtotal, pajak, TotalBayar, uangCukup, kembalian, itemGenap, transaksiSelesai);