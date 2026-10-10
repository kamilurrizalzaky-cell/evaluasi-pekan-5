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

/*
jawab pertanyaan bagian 2:
1. jawaban:
   karena nomor telepon diawali dengan angka 0 [yang jika disimpan sebagai number akan diabaikan oleh javascript] dan nomor telepon tidak pernah 
   digunakan untuk operasi matematika.
2. jawaban:
   website diisi null secara sengaja untuk menunjukkan bahwa properti tersebut kosong atau belum ada nilai
   nya. sedangkan catatanKasir dibiarkan tanpa nilai karena variabel tersebut baru dideklarasikan dan belum diinisialisasi.
3. jawaban:
   hasilnya adalah undefined. karena array di javasript menggunakan indeks berbaris 0, shingga indeks untuk 6 item adalah 0 sampai 5.
   indeks 6 berada di luar batas array.
4. jawaban:
   hasilnya adalah object. di javascript, array secara teknis adalah tipe data turunan dari object [object khusus yang meiliki properti numerik dan method array].
5. jawaban;
   menu dibuat sebagai array karena berisi daftar item yang sejenis dan berurutan. kedai dibuat sebagai object karena merepresentasikan satu entitas yang 
   memiliki berbagai atribut dengan kunci yang spesifik.
*/

//transaksi 1
const t1Subtotal = (menu[transaksi[0].pesanan[0].indeksMenu].harga * transaksi[0].pesanan[0].jumlah) +
                   (menu[transaksi[0].pesanan[1].indeksMenu].harga * transaksi[0].pesanan[1].jumlah);
const t1Potongan = transaksi[0].sudahMember ? t1Subtotal * 0.10 : 0;
const t1Pajak = (t1Subtotal - t1Potongan) * 0.11;
const t1TotalBayar = t1Subtotal - t1Potongan + t1Pajak;
const t1Kembalian = transaksi[0].uangBayar - t1TotalBayar;
const t1UangCukup = transaksi[0].uangBayar >= t1TotalBayar;
const t1JumlahItem = transaksi[0].pesanan[0].jumlah + transaksi[0].pesanan[1].jumlah;
const t1GratisAntar = t1Subtotal >= 100000 || t1JumlahItem >=5;
const t1SemuaMenuTersedia = menu[transaksi[0].pesanan[0].indeksMenu].tersedia && menu[transaksi[0].pesanan[1].indeksMenu].tersedia;

//transaksi 2
const t2Subtotal =menu[transaksi[1].pesanan[0].indeksMenu].harga * transaksi[1].pesanan[0].jumlah;
const t2Potongan = transaksi[1].sudahMember ? t2Subtotal * 0.10 : 0;
const t2Pajak = (t2Subtotal - t2Potongan) * 0.11;
const t2TotalBayar = t2Subtotal - t2Potongan + t2Pajak;
const t2Kembalian = transaksi[1].uangBayar - t2TotalBayar;
const t2UangCukup = transaksi[1].uangBayar >= t2TotalBayar;
const t2JumlahItem = transaksi[1].pesanan[0].jumlah;
const t2GratisAntar = t2Subtotal >= 100000 || t2JumlahItem >= 5;
const t2SemuaMenuTersedia = menu[transaksi[1].pesanan[0].indeksMenu].tersedia;

//transaksi 3
const t3Subtotal = (menu[transaksi[2].pesanan[0].indeksMenu].harga * transaksi[2].pesanan[0].jumlah) +
                   (menu[transaksi[2].pesanan[1].indeksMenu].harga * transaksi[2].pesanan[1].jumlah);
const t3Potongan = transaksi[2].sudahMember ? t3Subtotal * 0.10 : 0;
const t3Pajak = (t3Subtotal - t3Potongan) * 0.11;
const t3TotalBayar = t3Subtotal - t3Potongan + t3Pajak;
const t3Kembalian = transaksi[2].uangBayar - t3TotalBayar;
const t3UangCukup = transaksi[2].uangBayar >= t3TotalBayar;
const t3JumlahItem = transaksi[2].pesanan[0].jumlah + transaksi[2].pesanan[1].jumlah;
const t3GratisAntar = t3Subtotal >= 100000 || t3JumlahItem >= 5;
const t3SemuaMenuTersedia = menu[transaksi[2].pesanan[0].indeksMenu].tersedia && menu[transaksi[2].pesanan[1].indeksMenu].tersedia;

// sisa pecahan untuk kembalian >= 0
const t1Sisa50k = t1Kembalian >= 0 ? (t1Kembalian % 50000) % 20000 : null;
const t2Sisa50k = t2Kembalian >= 0 ? (t2Kembalian % 50000) % 20000 : null;
const t3Sisa50k = t3Kembalian >= 0 ? (t3Kembalian % 50000) % 20000 : null;

// laporan harian
let pendapatanHarian = 0;
pendapatanHarian += t1TotalBayar;
pendapatanHarian += t2TotalBayar;
pendapatanHarian += t3TotalBayar;

let jumlahTransaksi = 0;
jumlahTransaksi++;
jumlahTransaksi++;
jumlahTransaksi++;

const rataRataPendapatan =pendapatanHarian / jumlahTransaksi;
const SelisihTerbesar = Math.max(t1TotalBayar, t2TotalBayar, t3TotalBayar) - Math.min(t1TotalBayar, t2TotalBayar, t3TotalBayar);
const persentaseTransaksiPertama = (t1TotalBayar / pendapatanHarian) * 100;
const hargaKopiTigaBulan = menu[0].harga (1.05 ** 3);

// cetak laporan
console.log(`=== LAPORAN HARIAN ${kedai.nama.toUpperCase()} ===`);
console.log(`Pendapatan Harian: Rp ${pendapatanHarian.toLocaleString('id-ID')}`);
console.log(`Jumlah Transaksi: ${jumlahTransaksi}`);
console.log(`Rata-rata Pendapatan: Rp ${rataRataPendapatan.toLocaleString('id-ID')}`);
console.log(`Selisih Terbesar: Rp ${selisihTerbesar.toLocaleString('id-ID')}`);
console.log(`Persentase Transaksi 1: ${persentaseTransaksiPertama.toFixed(2)}%`);
console.log(`Simulasi Harga Kopi 3 Bulan: Rp ${hargaKopiTigaBulan.toFixed(2)}`);

/*
Jawab Pertanyaan Bagian 3:
1. Tulis perhitungan manual untuk satu transaksi pilihanmu dari subtotal sampai kembalian. Apakah sama dengan hasil program?
   (Contoh Transaksi 1):
   - Subtotal = (18000 * 2) + (15000 * 1) = 36000 + 15000 = 51000
   - Potongan member (10%) = 51000 * 0.10 = 5100
   - Subtotal setelah potongan = 51000 - 5100 = 45900
   - Pajak (11%) = 45900 * 0.11 = 5049
   - Total Bayar = 45900 + 5049 = 50949
   - Uang Bayar = 50000 (Catatan: pada data awal uang bayar 50000 kurang dari total bayar 50949, sehingga uangCukup false dan kembalian negatif. Agar cukup, uang bayar diubah minimal 51000). Hasil program sama persis.
2. Pilih satu transaksi. Ganti || pada gratisAntar menjadi &&. Tulis hasil sebelum dan sesudah, lalu jelaskan kenapa berbeda.
   - Sebelum (||): Jika salah satu syarat terpenuhi (subtotal >= 100k ATAU jumlah item >= 5), maka `gratisAntar` bernilai `true`.
   - Sesudah (&&): Kedua syarat harus terpenuhi secara bersamaan (subtotal >= 100k DAN jumlah item >= 5). Jika hanya salah satu yang terpenuhi, hasilnya menjadi `false`.
3. Tulis satu perhitunganmu yang hasilnya berubah jika tanda kurungnya dihapus. Berapa hasil dengan dan tanpa kurung?
   - Contoh pada pajak: `const pajak = (t1Subtotal - t1Potongan) * 0.11;`
   - Dengan kurung: Mengurangi subtotal dengan potongan terlebih dahulu, baru dikalikan 0.11.
   - Tanpa kurung (`t1Subtotal - t1Potongan * 0.11`): Operator perkalian dikerjakan lebih dulu, sehingga potongan dikalikan 0.11 dulu baru dikurangkan dari subtotal, menghasilkan nilai pajak yang salah.
4. Sebutkan 3 variabelmu yang memakai const dan 3 yang memakai let. Jelaskan alasan masing-masing.
   - const: `kedai`, `menu`, `transaksi` (karena referensi struktur data utama tidak diubah setelah dideklarasikan).
   - let: `pendapatanHarian`, `jumlahTransaksi`, `t1TotalBayar` (nilai-nilai ini diakumulasi atau dihitung berdasarkan kondisi program yang berjalan).
5. Kenapa hargaKopiTigaBulan tidak dihitung dengan harga * 1.05 * 3? Apa bedanya 1.05 ** 3 dengan 1.05 * 3?
   - `1.05 * 3` adalah kenaikan linier (penambahan tetap sebesar 5% dari harga awal sebanyak 3 kali lipat dari harga dasar).
   - `1.05 ** 3` adalah perhitungan bunga majemuk (compounding growth), di mana harga bulan kedua naik 5% dari harga bulan pertama, dan bulan ketiga naik 5% dari bulan kedua. Simulasi harga berkala menggunakan pangkat (`**`).
6. Jika harga pada menu[0] diubah di data, apakah hasil perhitungan yang sudah tercetak ikut berubah otomatis? Buktikan dengan kode.
   - Tidak, karena nilai variabel di JavaScript dieksekusi secara sekuensial (berurutan dari atas ke bawah). Nilai `t1Subtotal` dihitung saat baris tersebut dieksekusi. Jika `menu[0].harga` diubah setelah perhitungan dilakukan, variabel `t1Subtotal` tidak akan berubah otomatis kecuali perhitungan ulang dijalankan.
*/