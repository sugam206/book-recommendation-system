'use client'
import { useParams, useRouter } from "next/navigation";
import { Book } from "@/app/types/book";
import { books } from "@/app/data/books";
import Cart from "@/app/components/ui/Cart";

const BookDetails = () => {
    const router = useRouter();
    const params = useParams();
    const id = params?.id;
    const book: Book | undefined = books.find((b: Book) => b.id === parseInt(id as string, 10));
    if (!book) return (
        <p>this book is not available</p>
    )
    return (
        <main className="">
            <div className="justify-between">  <div className="flex justify-end"> <button onClick={() => router.back()} className="bg-indigo-600 text-white w-13 rounded hover:bg-indigo-700">back</button></div>
                <div className="flex">
                    <div className="bg-amber-50 rounded-xl h-89 w-55 ">
                        <img
                            src={book.image}
                            alt={`${book.bookName} cover`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        /></div>
                    <div> <h1 className="text-3xl font-bold mb-4">{book.bookName}</h1>
                        <p className="text-lg">Author: {book.authorName}</p>
                        <p className="text-lg">Published: {book.publishedDate}</p>
                        <p className="text-lg">Pages: {book.pages}</p>
                        <p className="text-sm text-gray-500">Last Updated: {book.lastUpdatedDate}</p>
                        <div className="grid grid-cols-1 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2  gap-2.5 ">
                            <Cart />
                            <Cart />
                            <Cart />
                            <Cart />
                            <Cart />
                            <Cart />
                        </div>
                    </div>

                </div>
            </div>
            <div className="mt-5 ">
                <p>book series with auther name</p>
                <div className="flex gap-3 mt-3">

                    <div>
                        <Cart />
                    </div>
                    <div>
                        <Cart />
                    </div>
                    <div>
                        <Cart />
                    </div>
                    <div>
                        <Cart />
                    </div>
                    <div>
                        <Cart />
                    </div>
                    <div>
                        <Cart />
                    </div>
                    <div>
                        <Cart />
                    </div>
                </div>
                <p>all books in this series</p>
            </div>
            <div className="mt-5 ">
                <p>Books series with auther name</p>
                <div className="flex gap-3 mt-3">

                    <div>
                        <Cart />
                    </div>
                    <div>
                        <Cart />
                    </div>
                    <div>
                        <Cart />
                    </div>
                    <div>
                        <Cart />
                    </div>
                    <div>
                        <Cart />
                    </div>
                    <div>
                        <Cart />
                    </div>
                    <div>
                        <Cart />
                    </div>
                </div>
                <p>All Books by this auther </p>
            </div>


        </main>
    );
}


export default BookDetails


