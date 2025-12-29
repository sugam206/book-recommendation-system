import { books } from '../../data/books'

export default function Page() {
    const recommended = books.slice(0, 3)

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-2xl font-semibold mb-4">Recommended for you</h1>
            <p className="text-sm text-gray-600 mb-4">Our top picks based on popularity.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {recommended.map((b) => (
                    <div key={b.id} className="border rounded p-3 bg-white shadow-sm">
                        <img src={b.image} alt={b.bookName} className="h-40 w-full object-cover rounded mb-3" />
                        <div className="text-sm font-medium">{b.bookName}</div>
                        <div className="text-xs text-gray-500">{b.authorName}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
