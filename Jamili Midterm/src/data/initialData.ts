export const initialBooks = [
  { id: 1, title: "1984", author: "George Orwell", isbn: "978-0-452-28423-4", categoryId: 1 },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", isbn: "978-0-06-112008-4", categoryId: 1 },
  { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", isbn: "978-0-7432-7356-5", categoryId: 2 },
  { id: 4, title: "Pride and Prejudice", author: "Jane Austen", isbn: "978-0-14-143951-8", categoryId: 2 },
  { id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger", isbn: "978-0-316-76948-8", categoryId: null },
];

export const initialCategories = [
  { id: 1, name: "Dystopian Fiction", description: "Futuristic oppressive societies" },
  { id: 2, name: "Classic Literature", description: "Timeless novels" },
];