"use strict";
// File ini adalah entry point aplikasi
// Gunakan file ini untuk menguji implementasi yang sudah dibuat
// Contoh yang bisa dilakukan:
//   1. Import fungsi-fungsi yang sudah dibuat
//   2. Tambahkan beberapa data buku untuk testing
//   3. Uji fungsi listBooks untuk melihat semua data
//   4. Uji fungsi searchBook dengan dan tanpa parameter
// Silakan bereksplorasi untuk memastikan semua fungsi berjalan dengan baik
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const readline_1 = __importDefault(require("readline"));
const bookManager_1 = require("./functions/bookManager");
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// Menu utama
function showMenu() {
    console.log("\n===== MENU =====");
    console.log("1. Tambah Buku");
    console.log("2. Cari Buku");
    console.log("3. Lihat Semua Buku");
    console.log("4. Keluar");
    rl.question("\nPilih menu: ", (choice) => {
        switch (choice) {
            case "1":
                tambahBuku();
                break;
            case "2":
                cariBuku();
                break;
            case "3":
                (0, bookManager_1.listBooks)();
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
function tambahBuku() {
    rl.question("\nJudul buku: ", (title) => {
        rl.question("Nama penulis: ", (author) => {
            rl.question("Tahun terbit: ", (year) => {
                (0, bookManager_1.addBook)({
                    title,
                    author,
                    publicationYear: Number(year),
                });
                // tampilkan semua buku
                (0, bookManager_1.listBooks)();
                // kembali ke menu
                showMenu();
            });
        });
    });
}
// Cari buku
function cariBuku() {
    rl.question("\nMasukkan judul buku: ", (title) => {
        (0, bookManager_1.searchBook)(title);
        // tampilkan semua buku
        (0, bookManager_1.listBooks)();
        // kembali ke menu
        showMenu();
    });
}
// Awal program
console.log("===== SIMPLE BOOK MANAGEMENT =====");
// tampilkan daftar buku awal
(0, bookManager_1.listBooks)();
// tampilkan menu
showMenu();
