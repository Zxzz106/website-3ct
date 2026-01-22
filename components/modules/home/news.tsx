"use client";
import { useState, useEffect } from "react";
import news from "@/public/res/news.json";

export default function News() {
    const [itemsToShow, setItemsToShow] = useState(10);

    useEffect(() => {
        const updateItemsToShow = () => {
            if (typeof window !== "undefined") {
                const width = window.innerWidth;
                if (width < 768) {
                    setItemsToShow(4); // base: 1 column, show 4 items
                } else if (width < 1024) {
                    setItemsToShow(4); // md: 2 columns, show 4 items = 2 rows
                } else if (width < 1280) {
                    setItemsToShow(6); // lg: 3 columns, show 6 items = 2 rows
                } else if (width < 1536) {
                    setItemsToShow(8); // xl: 4 columns, show 8 items = 2 rows
                } else {
                    setItemsToShow(10); // 2xl: 5 columns, show 10 items = 2 rows
                }
            }
        };

        updateItemsToShow();
        window.addEventListener("resize", updateItemsToShow);
        return () => window.removeEventListener("resize", updateItemsToShow);
    }, []);
    return (
        <section id="news" className="scroll-mt-24 px-4 py-16 flex flex-col">
            <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-10 text-center">
                    {/* <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-emerald-700 shadow-sm dark:bg-emerald-500/10 dark:text-emerald-300">
                        News
                    </span> */}
                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                        新闻动态
                    </h2>
                    <div className="mt-4 mx-auto w-24 border-b-4 border-emerald-500 rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 auto-rows-fr gap-6 w-full flex-1">
                    {news.slice(0, itemsToShow).map((item, index) => (
                        <a
                            key={index}
                            href={item.extern_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group cursor-pointer"
                        >
                            {/* Image */}
                            <div className="relative w-full aspect-2/1 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                                <img
                                    src={`res/news_img/${item.image}`}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                {/* Title */}
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {item.title}
                                </h3>

                                {/* Description - Truncated to 3 lines */}
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
                                    {item.description}
                                </p>

                                {/* Categories */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {item.categories.slice(0, 3).map((category, catIndex) => (
                                        <span
                                            key={catIndex}
                                            className="inline-block px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded"
                                        >
                                            {category}
                                        </span>
                                    ))}
                                    {item.categories.length > 3 && (
                                        <span className="inline-block px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded">
                                            +{item.categories.length - 3}
                                        </span>
                                    )}
                                </div>

                                {/* Date & Author */}
                                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                                    <time className="text-xs text-gray-500 dark:text-gray-500">
                                        {new Date(item.date).toLocaleDateString('zh-CN', {
                                            year: 'numeric',
                                            month: '2-digit',
                                            day: '2-digit'
                                        })}
                                    </time>
                                    <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                                        {item.author}
                                    </span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
                <div className="w-full flex justify-end mt-8">
                    <a
                        href="/news"
                        className="text-green-600 hover:text-green-700 font-medium rounded-lg transition-colors duration-300"
                    >
                        查看更多 &gt;&gt;
                    </a>
                </div>
            </div>
        </section>
    );
}