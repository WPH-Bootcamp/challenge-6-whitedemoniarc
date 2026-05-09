// Tugas 3: Implementasikan fungsi-fungsi manajemen buku

// Fungsi addBook
// Fungsi ini digunakan untuk menambahkan buku baru ke dalam koleksi
// Parameter yang dibutuhkan: data buku sesuai tipe Book
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan bagaimana cara menambahkan buku ke array yang sudah disediakan

// Fungsi listBooks
// Fungsi ini digunakan untuk menampilkan semua buku yang tersimpan
// Tidak memerlukan parameter
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan cara menampilkan data buku dengan format yang mudah dibaca

// Fungsi searchBook
// Fungsi ini digunakan untuk mencari buku berdasarkan judul
// Parameter title bersifat opsional (bisa ada atau tidak)
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: jika parameter title diberikan, cari buku yang cocok
//           jika tidak diberikan, tampilkan semua buku atau berikan informasi yang sesuai

import { books } from "../data/books";
import { Book } from "../types";

// Tambah buku
export function addBook(book: Book): void {
  books.push(book);

  console.log("\nBuku berhasil ditambahkan!");
}

// Tampilkan semua buku
export function listBooks(): void {
  console.log("\n===== DAFTAR BUKU =====");

  books.forEach((book, index) => {
    console.log(
      `${index + 1}. ${book.title} - ${book.author} (${book.publicationYear})`,
    );
  });
}

// Cari buku
export function searchBook(title?: string): void {
  if (!title) {
    console.log("\nMasukkan judul buku.");
    return;
  }

  const results = books.filter((book) =>
    book.title.toLowerCase().includes(title.toLowerCase()),
  );

  console.log("\n===== HASIL PENCARIAN =====");

  if (results.length === 0) {
    console.log("Buku tidak ditemukan.");
    return;
  }

  results.forEach((book, index) => {
    console.log(
      `${index + 1}. ${book.title} - ${book.author} (${book.publicationYear})`,
    );
  });
}