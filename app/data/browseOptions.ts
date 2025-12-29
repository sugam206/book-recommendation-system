export type BrowseOption = { label: string; href: string }

export const browseOptions: BrowseOption[] = [
    { label: 'Recommendation', href: '/browse/recommendation' },
    { label: 'All Books', href: '/browse/all' },
    { label: 'Fiction', href: '/browse/fiction' },
    { label: 'Non-Fiction', href: '/browse/non-fiction' },
    { label: 'Science', href: '/browse/science' },
    { label: 'Best Sellers', href: '/browse/best-sellers' },
    { label: 'New Arrivals', href: '/browse/new' },
]
