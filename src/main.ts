// File ini adalah entry point aplikasi
// Gunakan file ini untuk menguji implementasi yang sudah dibuat
// Contoh yang bisa dilakukan:
//   1. Import fungsi-fungsi yang sudah dibuat
//   2. Tambahkan beberapa data buku untuk testing
//   3. Uji fungsi listBooks untuk melihat semua data
//   4. Uji fungsi searchBook dengan dan tanpa parameter
// Silakan bereksplorasi untuk memastikan semua fungsi berjalan dengan baik

// console.log("Book Management Application - Week 6");
// console.log("=====================================");

// // Mulai pengujian di bawah ini

// import { addBook, listBooks, searchBook } from "./functions/bookManager";

// // Tambah buku
// addBook({
//   title: "Laskar Pelangi",
//   author: "Andrea Hirata",
//   publicationYear: 2005,
// });

// addBook({
//   title: "Bumi",
//   author: "Tere Liye",
//   publicationYear: 2014,
// });

// addBook({
//   title: "Atomic Habits",
//   author: "James Clear",
//   publicationYear: 2018,
// });

// // Tampilkan semua buku
// console.log("\n=== LIST BOOKS ===");
// listBooks();

// // Cari buku
// console.log("\n=== SEARCH BOOK ===");
// searchBook("bumi");

// // Search tanpa parameter
// console.log("\n=== SEARCH ALL ===");
// searchBook();

import readline from "readline";
import { addBook, listBooks, searchBook } from "./functions/bookManager";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Menu utama
function showMenu(): void {
  console.log("\n===== MENU =====");
  console.log("1. Tambah Buku");
  console.log("2. Cari Buku");
  console.log("3. Lihat Semua Buku");
  console.log("4. Keluar");

  rl.question("\nPilih menu: ", (choice: string) => {
    switch (choice) {
      case "1":
        tambahBuku();
        break;

      case "2":
        cariBuku();
        break;

      case "3":
        listBooks();
        showMenu();
        break;

      case "4":
        console.log("\nProgram selesai.");
        rl.close();
        break;

      default:
        console.log("\nMenu tidak tersedia.");
        showMenu();
    }
  });
}

// Tambah buku
function tambahBuku(): void {
  rl.question("\nJudul buku: ", (title: string) => {
    rl.question("Nama penulis: ", (author: string) => {
      rl.question("Tahun terbit: ", (year: string) => {
        addBook({
          title,
          author,
          publicationYear: Number(year),
        });

        // tampilkan semua buku
        listBooks();

        // kembali ke menu
        showMenu();
      });
    });
  });
}

// Cari buku
function cariBuku(): void {
  rl.question("\nMasukkan judul buku: ", (title: string) => {
    searchBook(title);

    // tampilkan semua buku
    listBooks();

    // kembali ke menu
    showMenu();
  });
}

// Awal program
console.log("===== SIMPLE BOOK MANAGEMENT =====");

// tampilkan daftar buku awal
listBooks();

// tampilkan menu
showMenu();