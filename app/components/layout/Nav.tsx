"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { browseOptions } from "../../data/browseOptions";
import { links } from "@/app/data/navLinks";

const Topbar = () => {


    // browseOptions imported from app/data/browseOptions.ts

    const [query, setQuery] = useState("");
    const [isBrowseOpen, setIsBrowseOpen] = useState(false);
    const pathname = usePathname() || "/";

    return (
        <header className="w-full bg-[#402218] backdrop-blur-sm border-b">
            <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 p-4">
                <div className="flex items-center gap-4">
                    <Link href="/" className="text-xl font-semibold text-[#D7B19D]">
                        hamro kitab
                    </Link>
                </div>

                <div className="flex-1 max-w-md">
                    <label htmlFor="search" className="sr-only">
                        Search books
                    </label>
                    <input
                        id="search"
                        type="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search title, author, or ISBN"
                        className="w-full rounded-md border px-3 py-2 text-sm bg-[#D7B19D]"
                    />
                </div>

                <div className="flex items-center gap-4">
                    <ul className="flex gap-4">
                        {links.map((link) => {

                            if (link.label === "Browse") {
                                const isBrowseActive = browseOptions.some((option) =>
                                    option.href ? pathname.startsWith(option.href) : false
                                );

                                return (
                                    <li key="browse" className="relative">
                                        <button
                                            onClick={() => setIsBrowseOpen(!isBrowseOpen)}
                                            className={`text-sm font-medium ${isBrowseActive ? "text-[#C68B59]" : "text-[#D7B19D] hover:text-[#C68B59]"
                                                }`}
                                        >
                                            Browse
                                        </button>

                                        {isBrowseOpen && (
                                            <>
                                                <div className="fixed inset-0 z-40" onClick={() => setIsBrowseOpen(false)} />

                                                <div className="absolute right-0 mt-2 w-48 bg-[#402218] border border-[#D7B19D] rounded-md shadow-lg z-50">
                                                    <ul className="py-1">
                                                        {browseOptions.map((option) => {
                                                            const isActive = option.href ? pathname.startsWith(option.href) : false;
                                                            return (
                                                                <li key={option.href}>
                                                                    <Link
                                                                        href={option.href!}
                                                                        onClick={() => setIsBrowseOpen(false)}
                                                                        className={`block px-4 py-2 text-sm ${isActive ? "bg-[#C68B59] text-[#402218]" : "text-[#D7B19D] hover:bg-[#C68B59] hover:text-[#402218]"
                                                                            }`}
                                                                    >
                                                                        {option.label}
                                                                    </Link>
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                </div>
                                            </>
                                        )}
                                    </li>
                                );
                            }


                            const isActive = link.href === "/" ? pathname === "/" : (link.href ? pathname.startsWith(link.href) : false);

                            return (
                                <li key={link.href ?? link.label}>
                                    <Link
                                        href={link.href ?? "#"}
                                        aria-current={isActive ? "page" : undefined}
                                        className={"text-sm font-medium " + (isActive ? "text-[#C68B59]" : "text-[#D7B19D] hover:text-[#C68B59]")}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </header >
    );
};

export default Topbar;