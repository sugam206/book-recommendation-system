import Link from 'next/link'
import { books } from './data/books'

export default function Home() {
  return (
    <main className="py-6 px-10  min-h-screen">
      <div className=" flex justify-between"> <h1 className="text-2xl font-bold mb-6 ">
        Because you liked <span className="text-indigo-600">[Book/Genre]</span>
      </h1>
        <p className="text-[#402218]">View all</p></div>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {books.slice(0, 5).map(item => (
          <Link href={`/books/${item.id}`} key={item.id}> <article
            key={item.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col"
          >
            <div className="aspect-3/4 overflow-hidden rounded">
              <img
                src={item.image}
                alt={`${item.bookName} cover`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="mt-3 text-lg font-semibold line-clamp-1">{item.bookName}</h3>
            <p className="text-sm text-gray-600">{item.authorName}</p>
            <p className="text-xs text-gray-500">Published: {item.publishedDate}</p>
            <p className="text-xs text-gray-500">Pages: {item.pages}</p>
            <p className="text-xs text-gray-400">Updated: {item.lastUpdatedDate}</p>
          </article></Link>
        ))}
      </section>
      <div className="py-6 flex justify-between"> <h1 className="text-2xl font-bold mb-6 ">
        Because you liked <span className="text-indigo-600">[Book/Genre]</span>
      </h1>
        <p className="text-[#402218]">View all</p></div>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {books.slice(0, 5).map(item => (
          <article
            key={item.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col"
          >
            <div className="aspect-3/4 overflow-hidden rounded">
              <img
                src={item.image}
                alt={`${item.bookName} cover`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="mt-3 text-lg font-semibold line-clamp-1">{item.bookName}</h3>
            <p className="text-sm text-gray-600">{item.authorName}</p>
            <p className="text-xs text-gray-500">Published: {item.publishedDate}</p>
            <p className="text-xs text-gray-500">Pages: {item.pages}</p>
            <p className="text-xs text-gray-400">Updated: {item.lastUpdatedDate}</p>
          </article>
        ))}
      </section>
      <div className="py-6 flex justify-between"> <h1 className="text-2xl font-bold mb-6 ">
        Because you liked <span className="text-indigo-600">[Book/Genre]</span>
      </h1>
        <p className="text-[#402218]">View all</p></div>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {books.slice(0, 5).map(item => (
          <article
            key={item.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col"
          >
            <div className="aspect-3/4 overflow-hidden rounded">
              <img
                src={item.image}
                alt={`${item.bookName} cover`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="mt-3 text-lg font-semibold line-clamp-1">{item.bookName}</h3>
            <p className="text-sm text-gray-600">{item.authorName}</p>
            <p className="text-xs text-gray-500">Published: {item.publishedDate}</p>
            <p className="text-xs text-gray-500">Pages: {item.pages}</p>
            <p className="text-xs text-gray-400">Updated: {item.lastUpdatedDate}</p>
          </article>
        ))}
      </section>
    </main >
  );
}
