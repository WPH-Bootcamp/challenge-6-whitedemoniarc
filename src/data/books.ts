// Tugas 2: Buat array untuk menyimpan koleksi buku
// Array ini akan digunakan sebagai penyimpanan data sementara selama aplikasi berjalan
// Pertimbangkan tipe data yang tepat untuk array ini berdasarkan definisi Book yang sudah dibuat

import { Book } from "../types";

// Array penyimpanan buku
export const books: Book[] = [
  {
    title: "Laskar Pelangi",
    author: "Andrea Hirata",
    publicationYear: 2005,
  },
  {
    title: "Bumi",
    author: "Tere Liye",
    publicationYear: 2014,
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    publicationYear: 2018,
  },
];
