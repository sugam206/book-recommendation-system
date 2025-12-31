"use client"

import React, { useState, useEffect } from 'react'

interface Book {
    id: number
    cover: string
    title: string
    author: string
    avgRating: number
    rating: number
    shelves: string[]
    review: string
    dateRead: string
    dateAdded: string
}
const books: Book[] = [
    {
        id: 1,
        cover: '/dfasad.png',
        title: 'The Great Book',
        author: 'Jane Doe',
        avgRating: 4.2,
        rating: 5,
        shelves: ['Read', 'Favorites'],
        review: 'A fantastic read with memorable characters.',
        dateRead: '2024-02-14',
        dateAdded: '2024-01-10',
    },
    {
        id: 2,
        cover: '/dfasad.png',
        title: 'Another Story',
        author: 'John Smith',
        avgRating: 3.9,
        rating: 4,
        shelves: ['To Read'],
        review: 'Nice pacing and enjoyable plot.',
        dateRead: '2024-05-01',
        dateAdded: '2024-03-22',
    },
]
function formatDate(d: string) {
    return new Date(d).toLocaleDateString()
}

const Page = () => {
    const [search, setSearch] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 10

    const q = search.trim().toLowerCase()
    const filteredBooks = books.filter((b) => {
        if (!q) return true
        return (
            b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q)
        )
    })

    const totalPages = Math.max(1, Math.ceil(filteredBooks.length / itemsPerPage))

    useEffect(() => {
        if (currentPage > totalPages) setCurrentPage(1)
    }, [search, totalPages])

    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = Math.min(startIndex + itemsPerPage, filteredBooks.length)
    const visibleBooks = filteredBooks.slice(startIndex, endIndex)

    const start = filteredBooks.length === 0 ? 0 : startIndex + 1
    const end = endIndex

    const goToPage = (p: number) => setCurrentPage(Math.min(Math.max(1, p), totalPages))
    const prev = () => goToPage(currentPage - 1)
    const next = () => goToPage(currentPage + 1)

    return (
        <div className=' flex overflow-hidden min-h-screen mt-11 py-6 justify-center'>
            <div className=" shadow rounded-lg  ">
                <header className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-semibold text-gray-800">My Books</h1>
                    <div className="flex gap-3">
                        <input
                            type="search"
                            placeholder="Search title, author..."
                            value={search}
                            onChange={(e) => { setSearch(e.target.value); setCurrentPage(1) }}
                            className="px-3 py-2 rounded-md border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
                        />

                    </div>
                </header>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr >
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cover</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">AVG Rating</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shelves</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Review</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Read</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Added</th>
                        </tr>
                    </thead>
                    <tbody>
                        {visibleBooks.length > 0 ? (
                            visibleBooks.map((b) => (
                                <tr key={b.id}>
                                    <td><img src={b.cover} alt={b.title} className="h-16 w-12 object-cover rounded" /></td>
                                    <td className="px-4 py-3 text-sm font-medium text-gray-800">{b.title}</td>
                                    <td className="px-4 py-3 text-sm font-medium text-gray-800">{b.author}</td>
                                    <td className="px-4 py-3 text-sm font-medium text-gray-800">{b.avgRating}</td>
                                    <td className="px-4 py-3 text-sm font-medium text-gray-800"> {b.rating}</td>
                                    <td className="px-4 py-3 text-sm font-medium text-gray-800"> <div className="flex gap-1 flex-wrap">
                                        {b.shelves.map((s) => (
                                            <span key={s} className="text-xs px-2 py-0.5 bg-gray-100 rounded-full text-gray-700">{s}</span>
                                        ))}
                                    </div> </td>
                                    <td className="px-4 py-3 text-sm font-medium text-gray-800"> {b.review} </td>
                                    <td className="px-4 py-3 text-sm font-medium text-gray-800">{formatDate(b.dateRead)}</td>
                                    <td className="px-4 py-3 text-sm font-medium text-gray-800"> {formatDate(b.dateAdded)} </td>
                                    <td className="text-indigo-600 hover:text-indigo-900 px-4 py-3 mr-3 "><button>Edit</button></td>
                                    <td className="text-green-600 hover:text-green-900 mr-3 px-4 py-3"><button>view</button></td>
                                    <td className="text-indigo-600 hover:text-red-900 mr-3 px-4 py-3"><button>delete</button></td>

                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={12} className="px-4 py-6 text-center text-sm text-gray-500">No books found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>

                {/* Pagination Controls */}
                <div className="p-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="text-sm text-gray-500"> Showing {start} - {end} of {filteredBooks.length} books</div>

                    <div className="flex items-center gap-2">
                        <button onClick={prev} disabled={currentPage === 1} className="px-3 py-1 bg-white border rounded disabled:opacity-50">Prev</button>

                        <div className="flex gap-1">
                            {Array.from({ length: totalPages }).map((_, i) => {
                                const p = i + 1
                                return (
                                    <button
                                        key={p}
                                        onClick={() => goToPage(p)}
                                        className={`px-3 py-1 rounded ${p === currentPage ? 'bg-indigo-600 text-white' : 'bg-white border'}`}>
                                        {p}
                                    </button>
                                )
                            })}
                        </div>

                        <button onClick={next} disabled={currentPage === totalPages} className="px-3 py-1 bg-white border rounded disabled:opacity-50">Next</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Page