// 1. objek kedai
const kedai = {
    nama: "Kedai Senja",
    pemilik: "rizal",
    kota: "bandung",
    tahunBerdiri: 2030,
    sedangBuka: true,
    nomorWhatsAapp: "085715025157",
    website: null,
    jamOperasional: {
        buka: "08:00",
        tutup: "22:00"
    }
};

// 2. array menu 
const menu = [
    {nama: "Kopi susu senja", kategori: "Minuman", harga: 18000, stok: 20, tersedia: true },
    {nama: "Espresso", kategori: "Minuman", harga: 22000, stok: 10, tersedia: true },
    {nama: "Matcha Latte", kategori: "Minuman", harga: 22000, stok: 10, tersedia: true },
    {nama: "Roti Bakar Coklat", kategori: "Makanan", harga: 15000, stok: 12, tersedia: true },
    {nama: "Pisang Goreng Keju", kategori: "Makanan", harga: 14000, stok: 8, tersedia: true },
    {nama: "Nasi Goreng Spesial", kategori: "Makanan", harga: 25000, stok: 0, tersedia: false },
];


// 3 dan 4. array transaksi
const transaksi = [
    {
        kode: "TRX-001",
        pelanggan: "Dobleh",
        sudahMember: true,
        uangBayar: 50000,
        catatan: "Es Teh Anget",
        pesanan: [
            { indeksMenu: 0, jumlah: 2},
            { indeksMenu: 3, jumlah: 1}
        ]
    },
    {
        kode: "TRX-002",
        pelanggan: "Asep",
        sudahMember: false,
        uangBayar: 20000,
        catatan: "Kurang Banyak",
        pesanan: [
            { indeksMenu: 1, jumlah: 1}
        ]
    },
    {
        kode: "TRX-003",
        pelanggan: "wahyu",
        sudahMember: true,
        uangBayar: 100000,
        catatan: "Sambelnya Banyakin",
        pesanan: [
            { indeksMenu: 2, jumlah: 2 },
            { indeksMenu: 4, jumlah: 2 },
        ]
    }
];

// 5.console
console.log("Nama Kedai:", kedai.nama);
console.log("Kota:", kedai["kota"]);
console.log("Jam Tutup:", kedai.jamOperasional.tutup);
console.log("Menu Pertama:", menu[0].nama);
console.log("Menu Terakhir:", menu[menu.length - 1].nama);
console.log("Pelanggan Transaksi 2:", transaksi[1].pelanggan);
console.log("Menu Item ke-2 Transaksi 3:", menu[transaksi[2].pesanan[1].indeksMenu].nama);

console.log("Typeof tahunBerdiri:", typeof kedai.tahunBerdiri);
console.log("Typeof sedangBuka:", typeof kedai.sedangBuka);
console.log("Typeof website:", typeof kedai.website);
console.log("Typeof jamOperasional:", typeof kedai.jamOperasional);
console.log("Typeof menu:", typeof menu);
console.log("Typeof catatan transaksi 0:", typeof transaksi[0].catatan);

// 6. catatan kasir
let catatanKasir;
console.log["Catatan Kasir", catatanKasir];
