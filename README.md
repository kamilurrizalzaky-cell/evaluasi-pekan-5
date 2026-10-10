# Kedai Senja - Sistem Pencatatan Transaksi UMKM

Aplikasi pencatatan data kedai, menu, simulasi perhitungan transaksi kasir, perbaikan kode, dan eksperimen konsep JavaScript dasar hingga lanjutan.

## Cara Menjalankan
1. Clone repository ini ke komputer lokal Anda.
2. Buka file `index.html`, `perbaikan.html`, atau `eksperimen.html` langsung melalui browser web atau menggunakan ekstensi Live Server di VS Code.
3. Buka Console Browser (F12 -> Console) untuk melihat hasil cetak program.

## Teknologi yang Digunakan
- HTML5
- JavaScript (ES6+)
- Git & GitHub

## Penulis
[Nama Anda]

---

## Riwayat Git (git log --oneline --graph)
*(Contoh hasil graph git log Anda)*
*   ac12b3d (HEAD -> main, origin/main) merge: selesaikan konflik merge pada README.md
|\  
| * b45e67f docs: ubah judul di branch konflik
* | c34d56a docs: penambahan eksperimen dan tebak JS (PR merged)
|/  
* 98a76b5 fix: perbaiki 12 kesalahan pada perbaikan.js
* 54c321a feat: tambahkan perhitungan transaksi dan laporan harian
* 10f9e8d feat: tambahkan data kedai, menu, dan transaksi awal
* 76a5432 chore: initial commit structure

## Hasil git blame index.html (Baris <title>)
- Commit terakhir: `76a5432`
- Oleh: `[Nama Anda]`
- Baris: `<title>Kedai Senja - Sistem Transaksi</title>`

## Jawaban Pertanyaan Konseptual

### 1. Apa beda git add dan git commit?
- `git add` berfungsi untuk mendaftarkan (staging) perubahan file ke area staging, mempersiapkan file tersebut untuk dimasukkan ke dalam riwayat commit berikutnya.
- `git commit` berfungsi untuk menyimpan snapshot permanen dari file yang ada di staging area ke dalam riwayat repositori Git dengan menyertakan pesan deskriptif.

### 2. Kenapa konflik terjadi pada Bagian 6.1, dan bagaimana kamu menyelesaikannya?
- Konflik terjadi karena Git mendeteksi adanya perubahan baris kode yang sama pada file yang sama (`README.md`) di dua branch yang berbeda (`main` dan branch simulasi) saat proses merge dilakukan.
- Cara menyelesaikannya adalah dengan membuka file yang konflik, memilih baris kode yang ingin dipertahankan (atau menggabungkannya secara manual), menghapus penanda konflik (`<<<<`, `====`, `>>>>`), lalu melakukan `git add` dan `git commit` penyelesaian konflik.

### 3. Apa beda fork dan clone? Apa gunanya Pull Request?
- **Fork**: Menyalin repository milik orang lain ke akun GitHub kita sendiri sebagai repositori terpisah di server remote.
- **Clone**: Mengunduh (download) repositori dari server remote (GitHub) ke komputer lokal untuk mulai dikerjakan secara offline.
- **Pull Request (PR)**: Fitur kolaborasi untuk mengajukan agar perubahan kode yang kita buat di suatu branch/repositori dapat direview dan digabungkan (merge) ke branch utama repositori lain.